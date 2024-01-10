import { Test, TestingModule } from '@nestjs/testing';
import { MapFavoriteController } from './map-favorite.controller';
import { MapFavoriteService } from './map-favorite.service';

describe('MapFavoriteController', () => {
  let controller: MapFavoriteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MapFavoriteController],
      providers: [MapFavoriteService],
    }).compile();

    controller = module.get<MapFavoriteController>(MapFavoriteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
