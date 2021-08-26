/* eslint-disable @typescript-eslint/no-unused-vars */
import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller, Get, Delete } from '@nestjs/common';
import { AccManager } from './Acc_Man-entity';
import { AccManService } from './Acc_Man-Services';
import { AuthenticationService } from 'src/authentication/authentication.service';

@Controller('accMan')
export class AccManController {
  constructor(
    private readonly accManService: AccManService,
    validate: AuthenticationService,
  ) {}

  @Post('create')
  async addAccMan(@Body() accManData: AccManager): Promise<any> {
    return this.accManService.createaccMan(accManData);
  }

  /*@Get(':id')
  getSingleAccMan(@Param('id') accMan_id: string) {
    return this.accManService.getOne(accMan_id);
  }*/

  @Get()
  ggetAll(): Promise<AccManager[]> {
    return this.accManService.findAll();
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() accManData: AccManager): Promise<any> {
    accManData.id = String(id);
    console.log('Update #' + accManData.id);
    return this.accManService.update(accManData);
  }

  @Delete(':id')
  removeParent(@Param('id') accMan_id: string) {
    this.accManService.delete(accMan_id);
    return null;
  }
}
