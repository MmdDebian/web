import { Test, TestingModule } from '@nestjs/testing';
import { MapFavoriteService } from './map-favorite.service';

describe('MapFavoriteService', () => {
  let service: MapFavoriteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MapFavoriteService],
    }).compile();

    service = module.get<MapFavoriteService>(MapFavoriteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
