import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller, Get, Delete } from '@nestjs/common';
import { Teacher } from './teacher.entity';
import { teacherServices } from './teacher.services';

@Controller('sec')
export class teacherController {
  constructor(private readonly teacherService: teacherServices) {}

  @Post('create')
  async addSecurity(@Body() teacherData: Teacher): Promise<any> {
    return this.teacherService.createTeacher(teacherData);
  }

  @Get()
  getAll(): Promise<Teacher[]> {
    return this.teacherService.findAll();
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() teacherData: Teacher): Promise<any> {
    teacherData.id = String(id);
    console.log('Update #' + teacherData.id);
    return this.teacherService.update(teacherData);
  }
  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.teacherService.delete(id);
  }
}
