import { Injectable } from '@nestjs/common';
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

  async createaccMan(accMan: AccManager): Promise<AccManager> {
    return await this.usersRepository.save(accMan);
  }

  /*getOne(accMan_id: string) {
    const accMan = this.accMan.find((accMan) => accMan.id === accMan_id);
    if (!accMan) {
      throw new NotFoundException('Could not find Parent');
    }
    return { ...accMan };
  }*/

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
