import { AccManager } from 'src/AccountManager/Acc_Man-entity';
import { Nurse } from 'src/Nurse/nurse.entities';
import { Security } from 'src/Security/security.entity';
import { Student } from 'src/Student/student.entities';
import { Teacher } from 'src/Teacher/teacher.entity';
import { JoinColumn } from 'typeorm';
import { OneToOne } from 'typeorm';
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

  @OneToMany(() => Student, (student) => student.id)
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @OneToMany(() => Teacher, (teacher) => teacher.id)
  @JoinColumn({ name: 'teacher_id' })
  teacher: Teacher;

  @OneToMany(() => AccManager, (accMan) => accMan.id)
  @JoinColumn({ name: 'accMan_id' })
  accMan: AccManager;

  @OneToMany(() => Nurse, (nurse) => nurse.id)
  @JoinColumn({ name: 'nurse_id' })
  nurse: Nurse;

  @OneToOne(() => Security, (security) => security.id)
  @JoinColumn({ name: 'security_id' })
  security: Security;
}
