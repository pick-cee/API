import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller, Get, Delete } from '@nestjs/common';
import { Nurse } from './nurse.entities';
import { nurseServices } from './nurse.services';
import * as bcrypt from 'bcrypt';
@Controller('nurse')
export class nurseController {
  constructor(private readonly nurseService: nurseServices) {}

  @Post('create')
  async addNurse(@Body() nurseData: Nurse): Promise<any> {
    const hashedPassword = await bcrypt.hash(nurseData.password, 10);
    try {
      const createdUser = await this.nurseService.createNurse({
        ...nurseData,
        password: hashedPassword,
      });
      createdUser.password = undefined;
      return createdUser;
    } catch (error) {
      return error;
    }
  }

  @Get(':email')
  getSingleNurse(@Param('email') nurse_email: string) {
    return this.nurseService.getByEmail(nurse_email);
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
