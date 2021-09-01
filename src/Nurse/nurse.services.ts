import { HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult } from 'typeorm';
import { UpdateResult } from 'typeorm';
import { Repository } from 'typeorm';
import { Nurse } from './nurse.entities';

@Injectable()
export class nurseServices {
  private nurse: Nurse;

  constructor(
    @InjectRepository(Nurse)
    private usersRepository: Repository<Nurse>,
  ) {}

  async createNurse(nurse): Promise<Nurse> {
    return await this.usersRepository.save(nurse);
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

  async findAll(): Promise<Nurse[]> {
    return await this.usersRepository.find();
  }

  async update(nurse: Nurse): Promise<UpdateResult> {
    return await this.usersRepository.update(nurse.id, nurse);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.usersRepository.delete(id);
  }
}
