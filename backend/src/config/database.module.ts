import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports : [
        TypeOrmModule.forRootAsync({
            imports : [ConfigModule] ,
            inject : [ConfigService] ,
            useFactory : (configService:ConfigService)=>({
                type : 'postgres' , 
                host : configService.get('DATABASE_HOST'),
                port : configService.get<number>('DATABASE_PORT') , 
                database : configService.get('DATABASE_NAME'),
                username : configService.get('DATABASE_USERNAME') , 
                password : configService.get('DATABASE_PASSWORD') , 
                entities : [ 
                    "dist/**/*.entity{.ts,.js}",
                    "src/**/*.entity{.ts,.js}"],
                synchronize : true 
            })
        })
    ] , 
    exports : []
})
export class DatabaseModule{}