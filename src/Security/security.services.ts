/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult } from 'typeorm';
import { UpdateResult } from 'typeorm';
import { Repository } from 'typeorm';
import { Security } from './security.entity';

@Injectable()
export class securityServices {
  private sec: Security;

  constructor(
    @InjectRepository(Security)
    private usersRepository: Repository<Security>,
  ) {}

  async createSec(security: Security): Promise<Security> {
    return await this.usersRepository.save(security);
  }

  async findAll(): Promise<Security[]> {
    return await this.usersRepository.find();
  }

  async update(security: Security): Promise<UpdateResult> {
    return await this.usersRepository.update(security.id, security);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.usersRepository.delete(id);
  }
}
