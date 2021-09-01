import { HttpStatus } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
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

  async createPar(parent): Promise<Parent> {
    return await this.usersRepository.save(parent);
  }

  async getByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this email does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

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
