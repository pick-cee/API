/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Parent } from './parent.entity';

@Injectable()
export class parentService {
  private parent: Parent;
  constructor(
    @InjectRepository(Parent)
    private usersRepository: Repository<Parent>,
  ) {}

  async createPar(parent: Parent): Promise<Parent> {
    return await this.usersRepository.save(parent);
  }

  /*getOne(parent_id: string) {
    const parent = this.parent.find((parent) => parent.id === parent_id);
    if (!parent) {
      throw new NotFoundException('Could not find Parent');
    }
    return { ...parent };
  }*/

  async findAll(): Promise<Parent[]> {
    return await this.usersRepository.find();
  }

  async update(parent: Parent): Promise<UpdateResult> {
    return await this.usersRepository.update(parent.id, parent);
  }

  async delete(parent_id): Promise<DeleteResult> {
    return this.usersRepository.delete(parent_id);
  }
}
