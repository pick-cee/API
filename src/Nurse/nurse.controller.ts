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
import { Nurse } from './nurse.entities';
import { nurseServices } from './nurse.services';
import * as bcrypt from 'bcrypt';
import { LocalAuthenticationGuard } from 'src/authentication/localAuthentication.guard';
import RequestWithUser from 'src/authentication/requestWithUser.interface';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller('nurse')
export class nurseController {
  constructor(private readonly nurseService: nurseServices) {}

  @Post('create')
  @UseInterceptors(FileInterceptor('profile_pic'))
  async uploadedFile(
    @Body() nurseData: Nurse,
    @UploadedFile() profile_pic: Express.Multer.File,
  ) {
    const hashedPassword = await bcrypt.hash(nurseData.password, 10);
    const createdUser = await this.nurseService.createNurse({
      ...nurseData,
      password: hashedPassword,
    });
    createdUser.password = undefined;
    return {
      nurseData,
      file: profile_pic.buffer.toString(),
      createdUser,
    };
  }

  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('log-in')
  async logIn(@Req() request: RequestWithUser) {
    const user = request.nurse;
    user.password = undefined;
    return user;
  }

  @Get(':email')
  getSingleNurse(@Param('email') nurse_email: string) {
    return this.nurseService.getByEmail(nurse_email);
  }

  @Get()
  getAll(): Promise<Nurse[]> {
    return this.nurseService.findAll();
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() nurseData: Nurse): Promise<any> {
    nurseData.id = String(id);
    console.log('Update #' + nurseData.id);
    return this.nurseService.update(nurseData);
  }
  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.nurseService.delete(id);
  }
}
