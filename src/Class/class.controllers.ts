import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller, Get, Delete } from '@nestjs/common';
import { Class } from './class.entity';
import { classServices } from './class.services';

@Controller('class')
export class securityController {
  constructor(private readonly classService: classServices) {}

  @Post('create')
  async addSecurity(@Body() classData: Class): Promise<any> {
    return this.classService.createClass(classData);
  }

  @Get()
  getAll(): Promise<Class[]> {
    return this.classService.findAll();
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() classData: Class): Promise<any> {
    classData.id = String(id);
    console.log('Update #' + classData.id);
    return this.classService.update(classData);
  }
  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.classService.delete(id);
  }
}
