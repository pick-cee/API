import { Injectable } from '@nestjs/common';
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

  async createStudent(student: Student): Promise<Student> {
    return await this.usersRepository.save(student);
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
