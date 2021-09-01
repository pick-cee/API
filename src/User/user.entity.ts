import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  BaseEntity,
  BeforeInsert,
} from 'typeorm';
import { Student } from 'src/Student/student.entities';
import { Parent } from 'src/parent/parent.entity';
import { JoinColumn } from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';
import * as bcrypt from 'bcrypt';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  full_name: string;

  @Column()
  age: number;

  @Column()
  profile_pic: string;

  @Column()
  phone_number: number;

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
  address: string;

  @Column()
  gender: string;

  @OneToMany(() => Student, (student) => student.id)
  @JoinColumn({ name: 'student_id' })
  student: Student[];

  @OneToMany(() => Parent, (parent) => parent.id)
  @JoinColumn({ name: 'parent_id' })
  parent: Parent[];
}
