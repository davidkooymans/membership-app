import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    partnerName: string;

    @Column('date')
    expiryDate: Date

    @Column('date')
    joinedDate: Date

    @Column()
    phoneNumber: string

    @Column()
    email: string

    @Column("int")
    adults: number

    @Column("int")
    children: number

    @Column()
    suburb: string

    @Column()
    incomeType: string

    @Column({ default: true })
    isActive: boolean;
}
