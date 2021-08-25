import { IsEmail, IsNotEmpty } from 'class-validator';
import { School } from 'src/School/school.entities';
import { JoinColumn } from 'typeorm';
import { ManyToOne } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Nurse {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @IsNotEmpty()
  password: string;

  @Column()
  qualification: string;

  @Column()
  photo: string;

  @Column()
  other_docs: string;

  @ManyToOne(() => School, (school) => school.id)
  @JoinColumn({ name: 'school_id' })
  school: School;
}
