//import { UploadedFile, UseInterceptors } from '@nestjs/common';
import {
  Body,
  HttpCode,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller, Get, Delete } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { LocalAuthenticationGuard } from 'src/authentication/localAuthentication.guard';
import RequestWithUser from 'src/authentication/requestWithUser.interface';
import { School } from './school.entities';
import { schoolServices } from './school.services';
import * as bcrypt from 'bcrypt';

@Controller('school')
export class schoolController {
  constructor(private readonly schoolService: schoolServices) {}

  @Post('create')
  @UseInterceptors(FileInterceptor('profile_pic'))
  async uploadedFile(
    @Body() schoolData: School,
    @UploadedFile() profile_pic: Express.Multer.File,
  ) {
    const hashedPassword = await bcrypt.hash(schoolData.password, 10);
    const createdUser = await this.schoolService.createSchool({
      ...schoolData,
      password: hashedPassword,
    });
    createdUser.password = undefined;
    return {
      schoolData,
      file: profile_pic.buffer.toString(),
      createdUser,
    };
  }

  @Get()
  getAll(): Promise<School[]> {
    return this.schoolService.findAll();
  }

  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('log-in')
  async logIn(@Req() request: RequestWithUser) {
    const user = request.school;
    user.password = undefined;
    return user;
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() schoolData: School): Promise<any> {
    schoolData.id = String(id);
    console.log('Update #' + schoolData.id);
    return this.schoolService.update(schoolData);
  }
  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.schoolService.delete(id);
  }
}
