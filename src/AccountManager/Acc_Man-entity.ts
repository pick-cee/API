/* eslint-disable @typescript-eslint/no-unused-vars */
import { IsEmail, IsNotEmpty } from 'class-validator';
import { School } from '../School/school.entities';
import { BeforeInsert } from 'typeorm';
import { JoinColumn } from 'typeorm';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class AccManager extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  @IsNotEmpty()
  password: string;
  @BeforeInsert() async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @Column()
  profile_pic: string;

  @ManyToOne(() => School, (school) => school.id)
  @JoinColumn({ name: 'school_id' })
  school: School;
}
