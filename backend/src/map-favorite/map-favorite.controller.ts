import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MapFavoriteService } from './map-favorite.service';
import { CreateMapFavoriteDto } from './dto/create-map-favorite.dto';
import { UpdateMapFavoriteDto } from './dto/update-map-favorite.dto';

@Controller('map-favorite')
export class MapFavoriteController {
  constructor(private readonly mapFavoriteService: MapFavoriteService) {}

  @Post()
  create(@Body() createMapFavoriteDto: CreateMapFavoriteDto) {
    return this.mapFavoriteService.create(createMapFavoriteDto);
  }

  @Get()
  findAll() {
    return this.mapFavoriteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mapFavoriteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMapFavoriteDto: UpdateMapFavoriteDto) {
    return this.mapFavoriteService.update(+id, updateMapFavoriteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mapFavoriteService.remove(+id);
  }
}
