import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Parent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  full_name: string;

  @Column()
  age: number;

  @Column()
  profile_pic: string;

  @Column()
  phone_number: number;

  @Column()
  email: string;

  @Column()
  address: string;

  @Column()
  gender: string;

  @Column({ default: true })
  isActive: boolean;
}
