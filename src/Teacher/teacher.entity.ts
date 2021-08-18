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
}
