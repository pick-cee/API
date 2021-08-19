/* eslint-disable @typescript-eslint/no-unused-vars */
import { Student } from 'src/Student/student.entities';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  BaseEntity,
} from 'typeorm';
import { JoinColumn } from 'typeorm/decorator/relations/JoinColumn';

@Entity()
export class Class extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  student_id: string;

  @OneToMany(() => Student, (student) => student.id)
  @JoinColumn({ name: 'student_id' })
  student: Student;
}
