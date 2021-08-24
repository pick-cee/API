/* eslint-disable @typescript-eslint/no-unused-vars */
import { School } from 'src/School/school.entities';
import { IsEmail } from 'class-validator';
import { OneToOne } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Security {
  push(newSecurity: Security) {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  password: string;

  @OneToOne(() => School, (school) => school.id)
  school: School;
}
