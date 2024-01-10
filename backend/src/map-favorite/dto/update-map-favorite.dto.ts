import { PartialType } from '@nestjs/mapped-types';
import { CreateMapFavoriteDto } from './create-map-favorite.dto';

export class UpdateMapFavoriteDto extends PartialType(CreateMapFavoriteDto) {}
