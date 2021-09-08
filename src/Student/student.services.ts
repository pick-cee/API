import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult } from 'typeorm';
import { UpdateResult } from 'typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entities';

@Injectable()
export class studentServices {
  private student: Student;

  constructor(
    @InjectRepository(Student)
    private usersRepository: Repository<Student>,
  ) {}

  async createStudent(student): Promise<Student> {
    return await this.usersRepository.save(student);
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

  async findAll(): Promise<Student[]> {
    return await this.usersRepository.find();
  }

  async update(student: Student): Promise<UpdateResult> {
    return await this.usersRepository.update(student.id, student);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.usersRepository.delete(id);
  }
}
