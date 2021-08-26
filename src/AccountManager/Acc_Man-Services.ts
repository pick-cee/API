import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult } from 'typeorm';
import { UpdateResult } from 'typeorm';
import { Repository } from 'typeorm';
import { AccManager } from './Acc_Man-entity';

@Injectable()
export class AccManService {
  private accMan: AccManager;

  constructor(
    @InjectRepository(AccManager)
    private usersRepository: Repository<AccManager>,
  ) {}

  async createaccMan(accMan) {
    return await this.usersRepository.save(accMan);
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

  async findAll(): Promise<AccManager[]> {
    return await this.usersRepository.find();
  }

  async update(accMan: AccManager): Promise<UpdateResult> {
    return await this.usersRepository.update(accMan.id, accMan);
  }

  async delete(accMan_id): Promise<DeleteResult> {
    return this.usersRepository.delete(accMan_id);
  }
}
