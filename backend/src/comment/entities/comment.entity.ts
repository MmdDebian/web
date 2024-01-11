import { Location } from "src/location/entities/location.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn('uuid')
    id : string 

    @Column({type : 'varchar' , nullable : false})
    content : string ; 

    @ManyToOne(()=>User, (user)=>user.comments)
    owner : User ;

    @ManyToOne(()=>Location, (location)=>location.comments)
    location : Location ;


    @Column({type : 'date' , default : new Date()})
    created_at :Date 

    @Column({type : 'date' , default : new Date()})
    updated_at : Date 
}
