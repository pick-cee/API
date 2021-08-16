import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Parent {
  splice() {
    throw new Error('Method not implemented.');
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  find(_arg0: (parent: any) => boolean) {
    throw new Error('Method not implemented.');
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  push(newParent: Parent) {
    throw new Error('Method not implemented.');
  }
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
  email: string;

  @Column()
  address: string;

  @Column()
  gender: string;

  @Column({ default: true })
  isActive: boolean;
}
