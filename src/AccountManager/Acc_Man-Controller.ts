/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpCode, Post, Req, UseGuards } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller, Get, Delete } from '@nestjs/common';
import { AccManager } from './Acc_Man-entity';
import { AccManService } from './Acc_Man-Services';
import * as bcrypt from 'bcrypt';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { LocalAuthenticationGuard } from 'src/authentication/localAuthentication.guard';
import RequestWithUser from 'src/authentication/requestWithUser.interface';

@Controller('accMan')
export class AccManController {
  constructor(private readonly accManService: AccManService) {}

  @Post('create')
  @UseInterceptors(FileInterceptor('profile_pic'))
  async uploadedFile(
    @Body() accManData: AccManager,
    @UploadedFile() profile_pic: Express.Multer.File,
  ) {
    const hashedPassword = await bcrypt.hash(accManData.password, 10);
    const createdUser = await this.accManService.createaccMan({
      ...accManData,
      password: hashedPassword,
    });
    createdUser.password = undefined;
    return {
      accManData,
      file: profile_pic.buffer.toString(),
      createdUser,
    };
  }

  @Get(':email')
  getSingleAccMan(@Param('email') accMan_email: string) {
    return this.accManService.getByEmail(accMan_email);
  }

  @Get()
  ggetAll(): Promise<AccManager[]> {
    return this.accManService.findAll();
  }

  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('log-in')
  async logIn(@Req() request: RequestWithUser) {
    const user = request.accMan;
    user.password = undefined;
    return user;
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
