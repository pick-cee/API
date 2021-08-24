import { School } from 'src/School/school.entities';
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
  email: string;

  @Column()
  password: string;

  @Column()
  qualification: string;

  @Column()
  photo: string;

  @Column()
  other_docs: string;

  @ManyToOne(() => School, (school) => school.id)
  school: School;
}
