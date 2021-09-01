import { IsEmail, IsNotEmpty } from 'class-validator';
import { Report } from 'src/Report-Card/report.entities';
import { School } from 'src/School/school.entities';
import { Student } from 'src/Student/student.entities';
import { BeforeInsert, ManyToOne } from 'typeorm';
import { JoinColumn } from 'typeorm';
import { OneToMany } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';
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
  @IsEmail()
  email: string;

  @Column()
  @IsNotEmpty()
  password: string;
  @BeforeInsert() async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @Column()
  profile_pic: string;

  @Column()
  qualifications: string;

  @Column()
  address: string;

  @Column()
  other_docs: string;

  @OneToMany(() => Student, (student) => student.id)
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @ManyToOne(() => School, (school) => school.id)
  @JoinColumn({ name: 'school_id' })
  school: School;

  @ManyToOne(() => Report, (report) => report.id)
  @JoinColumn({ name: 'report_id' })
  report: Report;
}
