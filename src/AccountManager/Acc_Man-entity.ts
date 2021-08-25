/* eslint-disable @typescript-eslint/no-unused-vars */
import { IsEmail, IsNotEmpty } from 'class-validator';
import { School } from 'src/School/school.entities';
import { JoinColumn } from 'typeorm';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
} from 'typeorm';

@Entity()
export class AccManager extends BaseEntity {
  find(_arg0: (accMan: any) => boolean) {
    throw new Error('Method not implemented.');
  }
  push(_newAccManager: AccManager) {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @IsNotEmpty()
  password: string;

  @ManyToOne(() => School, (school) => school.id)
  @JoinColumn({ name: 'school_id' })
  school: School;
}
