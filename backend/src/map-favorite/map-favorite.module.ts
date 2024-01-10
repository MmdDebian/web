import { Module } from '@nestjs/common';
import { MapFavoriteService } from './map-favorite.service';
import { MapFavoriteController } from './map-favorite.controller';

@Module({
  controllers: [MapFavoriteController],
  providers: [MapFavoriteService]
})
export class MapFavoriteModule {}
