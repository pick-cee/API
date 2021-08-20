import { Student } from 'src/Student/student.entities';
import { Teacher } from 'src/Teacher/teacher.entity';
import { JoinColumn } from 'typeorm';
import { OneToMany } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class School {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  login_name: string;

  @Column()
  password: string;

  @Column()
  name_of_school: string;

  @Column()
  logo: string;

  @Column()
  social_media: string;

  @Column()
  student_id: number;

  @Column()
  teacher_id: number;

  @OneToMany(() => Student, (student) => student.id)
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @OneToMany(() => Teacher, (teacher) => teacher.id)
  @JoinColumn({ name: 'teacher_id' })
  teacher: Teacher;
}
