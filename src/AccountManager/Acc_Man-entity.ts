/* eslint-disable @typescript-eslint/no-unused-vars */
import { School } from 'src/School/school.entities';
import { Student } from 'src/Student/student.entities';
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
  email: string;

  @Column()
  password: string;

  @Column()
  school_id: string;

  @ManyToOne(() => Student, (student) => student.id)
  @JoinColumn({ name: 'school_id' })
  school: School;
}
