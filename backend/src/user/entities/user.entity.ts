import { Comment } from "src/comment/entities/comment.entity";
import { Location } from "src/location/entities/location.entity";
import { MapFavorite } from "src/map-favorite/entities/map-favorite.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id : string ; 

    @Column({type : 'varchar'})
    first_name : string ; 

    @Column({type : 'varchar'})
    last_name : string ; 
    
    @Column({type : 'varchar' , nullable : false})
    email : string ; 

    @Column({type : 'varchar' , nullable : false})
    password : string ;

    @OneToMany(()=>Comment, (comment)=>comment.owner)
    comments : Comment[];

    @OneToMany(()=>Location , (location)=>location.owner) 
    locations : Location[] ;

    @OneToMany(()=>MapFavorite , (mapFavorite)=>mapFavorite.user) 
    mapFavorite : MapFavorite[]
}
