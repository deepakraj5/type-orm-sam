import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Orders {

    @PrimaryGeneratedColumn()
    order_id: number

    @Column()
    product_name: string

}