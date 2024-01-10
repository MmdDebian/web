import { Injectable } from '@nestjs/common';
import { CreateMapFavoriteDto } from './dto/create-map-favorite.dto';
import { UpdateMapFavoriteDto } from './dto/update-map-favorite.dto';

@Injectable()
export class MapFavoriteService {
  create(createMapFavoriteDto: CreateMapFavoriteDto) {
    return 'This action adds a new mapFavorite';
  }

  findAll() {
    return `This action returns all mapFavorite`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mapFavorite`;
  }

  update(id: number, updateMapFavoriteDto: UpdateMapFavoriteDto) {
    return `This action updates a #${id} mapFavorite`;
  }

  remove(id: number) {
    return `This action removes a #${id} mapFavorite`;
  }
}
