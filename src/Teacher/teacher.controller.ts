import {
  HttpCode,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller, Get, Delete } from '@nestjs/common';
import { Teacher } from './teacher.entity';
import { teacherServices } from './teacher.services';
import * as bcrypt from 'bcrypt';
import { LocalAuthenticationGuard } from 'src/authentication/localAuthentication.guard';
import RequestWithUser from 'src/authentication/requestWithUser.interface';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('sec')
export class teacherController {
  constructor(private readonly teacherService: teacherServices) {}

  @Post('create')
  @UseInterceptors(FileInterceptor('profile_pic'))
  async uploadedFile(
    @Body() teacherData: Teacher,
    @UploadedFile() profile_pic: Express.Multer.File,
  ) {
    const hashedPassword = await bcrypt.hash(teacherData.password, 10);
    const createdUser = await this.teacherService.createTeacher({
      ...teacherData,
      password: hashedPassword,
    });
    createdUser.password = undefined;
    return {
      teacherData,
      file: profile_pic.buffer.toString(),
      createdUser,
    };
  }

  @Get(':email')
  getSingleTeacher(@Param('email') teacher_email: string) {
    return this.teacherService.getByEmail(teacher_email);
  }

  @Get()
  getAll(): Promise<Teacher[]> {
    return this.teacherService.findAll();
  }

  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('log-in')
  async logIn(@Req() request: RequestWithUser) {
    const user = request.teacher;
    user.password = undefined;
    return user;
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() teacherData: Teacher): Promise<any> {
    teacherData.id = String(id);
    console.log('Update #' + teacherData.id);
    return this.teacherService.update(teacherData);
  }
  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.teacherService.delete(id);
  }
}
