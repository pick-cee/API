import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult } from 'typeorm';
import { UpdateResult } from 'typeorm';
import { Repository } from 'typeorm';
import { School } from './school.entities';

@Injectable()
export class schoolServices {
  private school: School;

  constructor(
    @InjectRepository(School)
    private usersRepository: Repository<School>,
  ) {}

  async createSchool(school: School): Promise<School> {
    return await this.usersRepository.save(school);
  }

  async findAll(): Promise<School[]> {
    return await this.usersRepository.find();
  }

  async update(school: School): Promise<UpdateResult> {
    return await this.usersRepository.update(school.id, school);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.usersRepository.delete(id);
  }
}
