import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventBus, QueryBus } from '@nestjs/cqrs';
import { ulid } from 'ulid';
import { GamesEvent } from './games/games.event';

@Controller()
export class AppController {
  constructor(private readonly eventBus:EventBus, private queryBus:QueryBus) {}

  @Get('games')
  async getGames() {

    this.eventBus.publish(new GamesEvent(ulid(), 'Nana','The game is designed to "3 cards of the same number."'));

    return {status: 'pending'}
  }

}
