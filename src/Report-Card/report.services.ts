import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateResult, DeleteResult, Repository } from 'typeorm';
import { Report } from './report.entities';

@Injectable()
export class reportService {
  private report: Report;

  constructor(
    @InjectRepository(Report)
    private usersRepository: Repository<Report>,
  ) {}

  async createReport(report: Report): Promise<Report> {
    return await this.usersRepository.save(report);
  }

  async findAll(): Promise<Report[]> {
    return await this.usersRepository.find();
  }
  async update(report: Report): Promise<UpdateResult> {
    return await this.usersRepository.update(report.id, report);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.usersRepository.delete(id);
  }
}
