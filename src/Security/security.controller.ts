import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller, Get, Delete } from '@nestjs/common';
import { Security } from './security.entity';
import { securityServices } from './security.services';
import * as bcrypt from 'bcrypt';

@Controller('security')
export class securityController {
  constructor(private readonly secService: securityServices) {}

  @Post('create')
  async addParent(@Body() secData: Security): Promise<any> {
    const hashedPassword = await bcrypt.hash(secData.password, 10);
    try {
      const createdUser = await this.secService.createSec({
        ...secData,
        password: hashedPassword,
      });
      createdUser.password = undefined;
      return createdUser;
    } catch (error) {
      return error;
    }
  }

  @Get(':email')
  getSingleSecurity(@Param('email') security_email: string) {
    return this.secService.getByEmail(security_email);
  }

  @Get('get')
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
