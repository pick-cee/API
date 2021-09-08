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
import { FileInterceptor } from '@nestjs/platform-express';
import { LocalAuthenticationGuard } from 'src/authentication/localAuthentication.guard';
import RequestWithUser from 'src/authentication/requestWithUser.interface';
import { Student } from './student.entities';
import { studentServices } from './student.services';
import * as bcrypt from 'bcrypt';
@Controller('student')
export class studentController {
  constructor(private readonly studentService: studentServices) {}

  @Post('create')
  @UseInterceptors(FileInterceptor('profile_pic'))
  async uploadedFile(
    @Body() studentData: Student,
    @UploadedFile() profile_pic: Express.Multer.File,
  ) {
    const hashedPassword = await bcrypt.hash(studentData.password, 10);
    const createdUser = await this.studentService.createStudent({
      ...studentData,
      password: hashedPassword,
    });
    createdUser.password = undefined;
    return {
      studentData,
      file: profile_pic.buffer.toString(),
      createdUser,
    };
  }

  @Get(':email')
  getSingleStudent(@Param('email') student_email: string) {
    return this.studentService.getByEmail(student_email);
  }

  @Get()
  getAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('log-in')
  async logIn(@Req() request: RequestWithUser) {
    const user = request.student;
    user.password = undefined;
    return user;
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() studentData: Student): Promise<any> {
    studentData.id = String(id);
    console.log('Update #' + studentData.id);
    return this.studentService.update(studentData);
  }
  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.studentService.delete(id);
  }
}
