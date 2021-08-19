/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  BaseEntity,
} from 'typeorm';
import { Student } from 'src/Student/student.entities';
import { JoinColumn } from 'typeorm';
@Entity()
export class Parent extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

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

  @Column()
  student_id: string;

  @OneToMany(() => Student, (student) => student.id)
  @JoinColumn({ name: 'student_id' })
  student: Student[];

  @Column({ default: true })
  isActive: boolean;
}
