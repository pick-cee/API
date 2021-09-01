/* eslint-disable @typescript-eslint/no-unused-vars */
import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller, Get, Delete } from '@nestjs/common';
import { AccManager } from './Acc_Man-entity';
import { AccManService } from './Acc_Man-Services';
import { AuthenticationService } from 'src/authentication/authentication.service';
import * as bcrypt from 'bcrypt';
@Controller('accMan')
export class AccManController {
  constructor(
    private readonly accManService: AccManService,
    validate: AuthenticationService,
  ) {}

  @Post('create')
  async addAccMan(@Body() accManData: AccManager): Promise<any> {
    const hashedPassword = await bcrypt.hash(accManData.password, 10);
    try {
      const createdUser = await this.accManService.createaccMan({
        ...accManData,
        password: hashedPassword,
      });
      createdUser.password = undefined;
      return createdUser;
    } catch (error) {
      return error;
    }
  }

  @Get(':email')
  getSingleAccMan(@Param('email') accMan_email: string) {
    return this.accManService.getByEmail(accMan_email);
  }

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
