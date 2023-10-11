import { CommandHandler, EventPublisher, ICommand, ICommandHandler } from "@nestjs/cqrs";
import { GamesCommand } from "./games.command";
import { ItemRepository } from "src/items/item.repository";

@CommandHandler(GamesCommand)
export class GamesHandler implements ICommandHandler<GamesCommand>{
    constructor(private readonly repository:ItemRepository, private readonly publisher:EventPublisher){}
    async execute(command:GamesCommand){
        const {id, name, description} = command;
        const game = this.publisher.mergeObjectContext(
            await this.repository.getById(id)
        );
        game.gameOnItem();
        game.commit();
    }
}