import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Orders } from "./orders";

@Entity()
export class Customers {

    @PrimaryGeneratedColumn()
    customer_id: number

    @Column()
    name: string

    @Column()
    location: string

    @OneToMany(() => Orders, order => order.order_id)
    orders: Orders[]

}