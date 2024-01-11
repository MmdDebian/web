import { Comment } from "src/comment/entities/comment.entity";
import { MapFavorite } from "src/map-favorite/entities/map-favorite.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Location {
    @PrimaryGeneratedColumn('uuid')
    id : string ; 

    title : string ; 

    descriotion : string ; 

    // @OneToMany()
    // features : 

    @OneToMany(()=>Comment , (comment)=>comment.location)
    comments : Comment[] ;

    @ManyToOne(()=>User , (user)=>user.locations)
    owner : User 

    @OneToOne(()=>MapFavorite , (mapFavorite)=>mapFavorite)
    mapFavorite : MapFavorite ;
    
    @Column({type : 'date' , default : new Date()})
    created_at : Date

    @Column({type : 'date' , default : new Date()})
    updated_at : Date 
}
