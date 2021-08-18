import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Report {
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
}
