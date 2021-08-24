import { Student } from 'src/Student/student.entities';
import { Teacher } from 'src/Teacher/teacher.entity';
import { ManyToOne } from 'typeorm';
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

  @OneToOne(() => Student, (student) => student.id)
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @ManyToOne(() => Teacher, (teacher) => teacher.id)
  @JoinColumn({ name: 'teacher_id' })
  teacher: Teacher;
}
