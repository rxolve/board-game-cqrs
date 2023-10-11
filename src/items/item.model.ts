import { AggregateRoot } from "@nestjs/cqrs";
import { GamesEventError, GamesEventOK } from "src/games/games.event";

export class ItemModel extends AggregateRoot {
    constructor(private readonly item:IItem){
        super();
    }

    gameOnItem(){
        try{
            this.apply(new GamesEventOK(this.item.id));
        }catch(e){
            console.log(e);
            this.apply(new GamesEventError(this.item.id, e));
        }

    }
}