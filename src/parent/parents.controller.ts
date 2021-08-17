import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller, Get, Delete } from '@nestjs/common';
import { Parent } from './parent.entity';
import { parentService } from './parents.service';

@Controller('parent')
export class ParentsController {
  constructor(private readonly parentsService: parentService) {}

  @Post('create')
  async addSecurity(@Body() parData: Parent): Promise<any> {
    return this.parentsService.createPar(parData);
  }

  /*@Get(':id')
  getSingleParent(@Param('id') parent_id: string) {
    return this.parentsService.getOne(parent_id);
  }*/

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
