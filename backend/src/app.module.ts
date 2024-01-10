import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MapFavoriteModule } from './map-favorite/map-favorite.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [UserModule, MapFavoriteModule, LocationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
