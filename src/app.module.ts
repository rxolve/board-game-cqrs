import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CqrsModule } from '@nestjs/cqrs';
import { GamesHandler } from './games/games.handler';
import { GamesSaga } from './games/games.saga';
import { ItemRepository } from './items/item.repository';

@Module({
  imports: [CqrsModule],
  controllers: [AppController],
  providers: [GamesHandler, GamesSaga, ItemRepository],
})
export class AppModule {}
