import { Injectable } from "@nestjs/common";
import { ICommand, Saga, ofType } from "@nestjs/cqrs";
import { Observable, flatMap, map } from "rxjs";
import { GamesEvent, GamesEventError, GamesEventOK } from "./games.event";
import { GamesCommand } from "./games.command";

@Injectable()
export class GamesSaga{
    @Saga()
    createGame = (events$:Observable<any>):Observable<ICommand> => {
        return events$.pipe(ofType(GamesEvent),map((event:GamesEvent) => {
            return new GamesCommand(event.id, event.name, event.description);
        }))
    }
    @Saga()
    createGamesOK = (events$: Observable<any>): Observable<ICommand> => {
        return events$.pipe(
        ofType(GamesEventOK),
        flatMap((event: GamesEventOK) => {
            console.log('OK');
            return [];
        }),
        );
    };
    @Saga()
    createOrderFail = (events$: Observable<any>): Observable<ICommand> => {
        return events$.pipe(
        ofType(GamesEventError),
        flatMap((event: GamesEventError) => {
            console.log('Error', event.error.message);
            return [];
        }),
        );
    };
}