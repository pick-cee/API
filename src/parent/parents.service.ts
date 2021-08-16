/* eslint-disable @typescript-eslint/no-empty-function */
import { NotFoundException } from '@nestjs/common';
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

  getOne(parent_id: string) {
    const parent = this.parent.find((parent) => parent.id === parent_id);
    if (!parent) {
      throw new NotFoundException('Could not find Parent');
    }
    return { ...parent };
  }

  getAll() {
    return { ...this.parent };
  }

  updateParent(
    parent_id: string,
    full_name: string,
    age: number,
    profile_pic: string,
    phone_number: number,
    email: string,
    address: string,
    gender: string,
  ) {
    const parent = this.parent.find((parent) => parent.id === parent_id);
    if (!parent) {
      throw new NotFoundException('Could not find Parent');
    }
    const updatedParent = { ...parent };
    if (full_name) {
      updatedParent.full_name = full_name;
    }
    if (age) {
      updatedParent.age = age;
    }
    if (profile_pic) {
      updatedParent.profile_pic = profile_pic;
    }
    if (phone_number) {
      updatedParent.phone_number = phone_number;
    }
    if (email) {
      updatedParent.email = email;
    }
    if (address) {
      updatedParent.address = address;
    }
    if (gender) {
      updatedParent.gender = gender;
    }
    this.parent = updatedParent;
  }

  deleteParent(parent_id: string) {
    this.parent.splice(parent_id);
  }
}
