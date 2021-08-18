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
}
