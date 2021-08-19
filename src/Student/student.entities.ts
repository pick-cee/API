/* eslint-disable @typescript-eslint/no-unused-vars */
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
  email: string;

  @Column()
  profile_pic: string;

  @Column()
  address: string;

  @Column()
  class_id: string;

  @Column()
  parent_id: string;

  @ManyToOne(() => Parent, (parent) => parent.id)
  @JoinColumn({ name: 'parent_id' })
  parent: Parent;

  @ManyToOne(() => Class, (class1) => class1.id)
  @JoinColumn({ name: 'class_id' })
  class: Class;
}
