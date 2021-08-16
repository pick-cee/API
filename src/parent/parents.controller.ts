import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Param, Patch } from '@nestjs/common';
import { Controller, Get, Delete } from '@nestjs/common';
import { ParentsModules } from './parents.modules';
import { parentService } from './parents.service';

@Controller('parent')
export class ParentsController {
  constructor(private readonly parentsService: parentService): any {}

  @Post()
  addParents(
    @Body('id') parent_id: number,
    @Body('full_name') parent_name: string,
    @Body('age') parent_age: number,
    @Body('profile_pic') parent_pic: string,
    @Body('phone_number') parent_num: number,
    @Body('email') parent_email: string,
    @Body('address') parent_address: string,
    @Body('gender') parent_gender: string,
  ) {
    const genParent = this.parentsService.addParents(
      parent_id,
      parent_name,
      parent_age,
      parent_pic,
      parent_num,
      parent_email,
      parent_address,
      parent_gender,
    );
    return { par: genParent };
  }

  @Get(':id')
  getSingleParent(@Param('id') parent_id: string) {
    return this.parentsService.getOne(parent_id);
  }

  @Get()
  getAllParents() {
    return this.parentsService.getAll();
  }

  @Patch(':id')
  updatePar(
    @Param('id') parent_id: string,
    @Body('full_name') parent_name: string,
    @Body('age') parent_age: number,
    @Body('profile_pic') parent_pic: string,
    @Body('phone_number') parent_num: number,
    @Body('email') parent_email: string,
    @Body('address') parent_address: string,
    @Body('gender') parent_gender: string,
  ) {
    this.parentsService.updateParent(
      parent_id,
      parent_name,
      parent_age,
      parent_pic,
      parent_num,
      parent_email,
      parent_address,
      parent_gender,
    );
    return null;
  }

  @Delete(':id')
  removeParent(@Param('id') parent_id: string) {
    this.parentsService.deleteParent(parent_id);
    return null;
  }
}
