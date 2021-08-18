import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller, Get, Delete } from '@nestjs/common';
import { Security } from './security.entity';
import { securityServices } from './security.services';

@Controller('sec')
export class securityController {
  constructor(private readonly secService: securityServices) {}

  @Post('create')
  async addSecurity(@Body() secData: Security): Promise<any> {
    return this.secService.createSec(secData);
  }

  @Get()
  getAll(): Promise<Security[]> {
    return this.secService.findAll();
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() secData: Security): Promise<any> {
    secData.id = String(id);
    console.log('Update #' + secData.id);
    return this.secService.update(secData);
  }
  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.secService.delete(id);
  }
}
