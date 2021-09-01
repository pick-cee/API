import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult } from 'typeorm';
import { UpdateResult } from 'typeorm';
import { Repository } from 'typeorm';
import { Teacher } from './teacher.entity';

@Injectable()
export class teacherServices {
  private teacher: Teacher;

  constructor(
    @InjectRepository(Teacher)
    private usersRepository: Repository<Teacher>,
  ) {}

  async createTeacher(teacher): Promise<Teacher> {
    return await this.usersRepository.save(teacher);
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

  async findAll(): Promise<Teacher[]> {
    return await this.usersRepository.find();
  }

  async update(teacher: Teacher): Promise<UpdateResult> {
    return await this.usersRepository.update(teacher.id, teacher);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.usersRepository.delete(id);
  }
}
