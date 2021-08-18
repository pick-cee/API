import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Class {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;
}
