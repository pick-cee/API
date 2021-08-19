import { Student } from 'src/Student/student.entities';
import { JoinColumn } from 'typeorm';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  BaseEntity,
} from 'typeorm';

@Entity()
export class Report extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  subject: string;

  @Column()
  grade: string;

  @Column()
  comment: string;

  @Column()
  student_id: number;

  @Column()
  teacher_id: number;

  @OneToOne(() => Student, (student) => student.id)
  student: Student;

  @JoinColumn()
  student1: Student['id'];
}
