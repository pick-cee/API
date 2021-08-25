import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  BaseEntity,
} from 'typeorm';
import { Parent } from 'src/parent/parent.entity';
import { Class } from 'src/Class/class.entity';
import { JoinColumn } from 'typeorm';
import { Teacher } from 'src/Teacher/teacher.entity';
import { School } from 'src/School/school.entities';
import { OneToOne } from 'typeorm';
import { Report } from 'src/Report-Card/report.entities';
import { IsEmail } from 'class-validator';
@Entity()
export class Student extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  middle_name: string;

  @Column()
  age: string;

  @Column()
  date_of_birth: string;

  @Column()
  health_issues: string;

  @Column()
  birth_certificate: string;

  @Column()
  gender: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  profile_pic: string;

  @Column()
  address: string;

  @ManyToOne(() => Parent, (parent) => parent.id)
  @JoinColumn({ name: 'parent_id' })
  parent: Parent;

  @ManyToOne(() => Class, (class1) => class1.id)
  @JoinColumn({ name: 'class_id' })
  class: Class;

  @ManyToOne(() => Teacher, (teacher) => teacher.id)
  @JoinColumn({ name: 'teacher_id' })
  teacher: Teacher;

  @ManyToOne(() => School, (school) => school.id)
  @JoinColumn({ name: 'school_id' })
  school: School;

  @OneToOne(() => Report, (report) => report.id)
  @JoinColumn({ name: 'report_id' })
  report: Report;
}
