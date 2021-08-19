import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller, Get, Delete } from '@nestjs/common';
import { Student } from './student.entities';
import { studentServices } from './student.services';
@Controller('student')
export class studentController {
  constructor(private readonly studentService: studentServices) {}

  @Post('create')
  async addStudent(@Body() studentData: Student): Promise<any> {
    return this.studentService.createStudent(studentData);
  }

  @Get()
  getAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() studentData: Student): Promise<any> {
    studentData.id = String(id);
    console.log('Update #' + studentData.id);
    return this.studentService.update(studentData);
  }
  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.studentService.delete(id);
  }
}
