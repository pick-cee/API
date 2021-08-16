import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccManager } from './Acc_Man-entity';

@Injectable()
export class AccManService {
  private accMan: AccManager;

  constructor(
    @InjectRepository(AccManager)
    private usersRepository: Repository<AccManager>,
  ) {}

  addAccMAnager(
    id: string,
    email: string,
    password: string,
    school_id: number,
  ) {
    const newAccManager = new AccManager();
    id;
    email;
    password;
    school_id;
    this.accMan.push(newAccManager);
    return newAccManager;
  }

  getOne(accMan_id: string) {
    const accMan = this.accMan.find((accMan) => accMan.id === accMan_id);
    if (!accMan) {
      throw new NotFoundException('Could not find Parent');
    }
    return { ...accMan };
  }

  getAll() {
    return { ...this.accMan };
  }

  updateAccMan(id: string, email: string, password: string, school_id: number) {
    const accMan = this.accMan.find((accMan) => accMan.id === id);
    if (!accMan) {
      throw new NotFoundException('Could not find entry');
    }
    const updatedAccMan = { ...accMan };
    if (email) {
      updatedAccMan.email = email;
    }
    if (password) {
      updatedAccMan.password = password;
    }
    if (school_id) {
      updatedAccMan.school_id = school_id;
    }
    this.accMan = updatedAccMan;
  }

  deleteAccMan(accMan_id: string) {
      this.accMan.splice(accMan_id);
  }
}
