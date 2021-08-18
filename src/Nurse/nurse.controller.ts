import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller, Get, Delete } from '@nestjs/common';
import { Nurse } from './nurse.entities';
import { nurseServices } from './nurse.services';

@Controller('nurse')
export class securityController {
  constructor(private readonly nurseService: nurseServices) {}

  @Post('create')
  async addSecurity(@Body() nurseData: Nurse): Promise<any> {
    return this.nurseService.createNurse(nurseData);
  }

  @Get()
  getAll(): Promise<Nurse[]> {
    return this.nurseService.findAll();
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() nurseData: Nurse): Promise<any> {
    nurseData.id = String(id);
    console.log('Update #' + nurseData.id);
    return this.nurseService.update(nurseData);
  }
  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.nurseService.delete(id);
  }
}
