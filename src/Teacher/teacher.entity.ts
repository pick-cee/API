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

  @Column()
  school_id: string;

  @Column()
  student_id: string;

  @Column()
  report_id: string;

  @OneToMany(() => Student, (student) => student.id)
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @ManyToOne(() => School, (school) => school.id)
  @JoinColumn({ name: 'school_id ' })
  school: School;

  @ManyToOne(() => Report, (report) => report.id)
  @JoinColumn({ name: 'report_id' })
  report: Report;
}
