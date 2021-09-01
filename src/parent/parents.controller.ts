import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller, Get, Delete } from '@nestjs/common';
import { Parent } from './parent.entity';
import { parentService } from './parents.service';
import * as bcrypt from 'bcrypt';
@Controller('parent')
export class ParentsController {
  constructor(private readonly parentsService: parentService) {}

  @Post('create')
  async addParent(@Body() parData: Parent): Promise<any> {
    const hashedPassword = await bcrypt.hash(parData.password, 10);
    try {
      const createdUser = await this.parentsService.createPar({
        ...parData,
        password: hashedPassword,
      });
      createdUser.password = undefined;
      return createdUser;
    } catch (error) {
      return error;
    }
  }

  @Get(':email')
  getSingle(@Param('email') parent_email: string) {
    return this.parentsService.getByEmail(parent_email);
  }

  @Get()
  getAll(): Promise<Parent[]> {
    return this.parentsService.findAll();
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() parData: Parent): Promise<any> {
    parData.id = String(id);
    console.log('Update #' + parData.id);
    return this.parentsService.update(parData);
  }

  @Delete(':id')
  removeParent(@Param('id') parent_id: string) {
    this.parentsService.delete(parent_id);
    return null;
  }
}
