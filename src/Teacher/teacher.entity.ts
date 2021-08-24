import { Report } from 'src/Report-Card/report.entities';
import { School } from 'src/School/school.entities';
import { Student } from 'src/Student/student.entities';
import { ManyToOne } from 'typeorm';
import { JoinColumn } from 'typeorm';
import { OneToMany } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  age: string;

  @Column()
  email: string;

  @Column()
  profile_pic: string;

  @Column()
  qualifications: string;

  @Column()
  address: string;

  @Column()
  other_docs: string;

  @OneToMany(() => Student, (student) => student.id)
  student: Student;

  @ManyToOne(() => School, (school) => school.id)
  school: School;

  @ManyToOne(() => Report, (report) => report.id)
  report: Report;
}
