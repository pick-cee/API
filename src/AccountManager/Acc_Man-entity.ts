/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AccManager {
  find(_arg0: (accMan: any) => boolean) {
    throw new Error('Method not implemented.');
  }
  push(_newAccManager: AccManager) {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  school_id: string;
}
