import { Location } from "src/location/entities/location.entity";
import { User } from "src/user/entities/user.entity";
import { Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MapFavorite {
    @PrimaryGeneratedColumn('uuid')
    id : string ; 

    @ManyToOne(()=>User , (user)=>user)
    user : User ;

    @OneToOne(()=>Location , (location)=>location.mapFavorite)
    location : Location ;
}
