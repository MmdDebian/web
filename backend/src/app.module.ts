import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MapFavoriteModule } from './map-favorite/map-favorite.module';
import { LocationModule } from './location/location.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './config/database.module';
import { CommentModule } from './comment/comment.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal : true}) , 
    DatabaseModule ,
    UserModule, 
    MapFavoriteModule, 
    LocationModule, 
    CommentModule, 
    AuthModule ,
  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
