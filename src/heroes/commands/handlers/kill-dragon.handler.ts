import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { HeroRepository } from '../../repository/hero.repository';
import { KillDragonCommand } from '../impl/kill-dragon.command';
import { Hero } from 'src/heroes/models/hero.model';

@CommandHandler(KillDragonCommand)
export class KillDragonHandler implements ICommandHandler<KillDragonCommand> {
  constructor(private readonly publisher: EventPublisher) {}

  async execute(command: KillDragonCommand) {
    console.log(clc.greenBright('KillDragonCommand...'));

    const { heroId, dragonId } = command;
    const HeroModel = this.publisher.mergeClassContext(Hero);
    const hero = new HeroModel(heroId);
    hero.killEnemy(dragonId);

    return 'OK';
  }
}
