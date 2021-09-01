/* eslint-disable @typescript-eslint/no-unused-vars */
import { School } from 'src/School/school.entities';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { OneToOne } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { JoinColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { BeforeInsert } from 'typeorm';

@Entity()
export class Security {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @IsNotEmpty()
  password: string;
  @BeforeInsert() async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @OneToOne(() => School, (school) => school.id)
  @JoinColumn({ name: 'school_id' })
  school: School;
}
