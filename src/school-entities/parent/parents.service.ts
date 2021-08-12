/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Parent } from './parent.entity';

@Injectable()
export class parentService {
  private parent: Parent;
  constructor(
    @InjectRepository(Parent)
    private usersRepository: Repository<Parent>,
  ) {}

  addParents(
    id: number,
    full_name: string,
    age: number,
    profile_pic: string,
    phone_number: number,
    email: string,
    address: string,
    gender: string,
  ) {
    const newParent = new Parent();
    id;
    full_name;
    age;
    profile_pic;
    phone_number;
    email;
    address;
    gender;
    this.parent.push(newParent);
    return newParent;
  }

  findOne() {}
}
