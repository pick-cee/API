import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async createSec(security): Promise<Security> {
    return await this.usersRepository.save(security);
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
