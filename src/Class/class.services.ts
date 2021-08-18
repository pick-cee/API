import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult } from 'typeorm';
import { UpdateResult } from 'typeorm';
import { Repository } from 'typeorm';
import { Class } from './class.entity';

@Injectable()
export class classServices {
  private class: Class;

  constructor(
    @InjectRepository(Class)
    private usersRepository: Repository<Class>,
  ) {}

  async createClass(class1: Class): Promise<Class> {
    return await this.usersRepository.save(class1);
  }

  async findAll(): Promise<Class[]> {
    return await this.usersRepository.find();
  }

  async update(class1: Class): Promise<UpdateResult> {
    return await this.usersRepository.update(class1.id, class1);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.usersRepository.delete(id);
  }
}
