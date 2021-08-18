import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller, Get, Delete } from '@nestjs/common';
import { School } from './school.entities';
import { schoolServices } from './school.services';

@Controller('school')
export class schoolController {
  constructor(private readonly schoolService: schoolServices) {}

  @Post('create')
  async addSecurity(@Body() schoolData: School): Promise<any> {
    return this.schoolService.createSchool(schoolData);
  }

  @Get()
  getAll(): Promise<School[]> {
    return this.schoolService.findAll();
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() schoolData: School): Promise<any> {
    schoolData.id = String(id);
    console.log('Update #' + schoolData.id);
    return this.schoolService.update(schoolData);
  }
  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.schoolService.delete(id);
  }
}
