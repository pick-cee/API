/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { User } from './user.entity';
import { userService } from './user.service';
import * as bcrypt from 'bcrypt';
import { LocalAuthenticationGuard } from 'src/authentication/localAuthentication.guard';
import RequestWithUser from 'src/authentication/requestWithUser.interface';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('user')
export class userController {
  constructor(private readonly userService: userService) {}

  @Post('create')
  @UseInterceptors(FileInterceptor('profile_pic'))
  async uploadedFile(
    @Body() userData: User,
    @UploadedFile() profile_pic: Express.Multer.File,
  ) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const createdUser = await this.userService.createUser({
      ...userData,
      password: hashedPassword,
    });
    createdUser.password = undefined;
    return {
      userData,
      file: profile_pic.buffer.toString(),
      createdUser,
    };
  }

  @Get(':email')
  getSingle(@Param('email') user_email: string) {
    return this.userService.getByEmail(user_email);
  }

  @Get()
  getAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('log-in')
  async logIn(@Req() request: RequestWithUser) {
    const user = request.user;
    user.password = undefined;
    return user;
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() userData: User): Promise<any> {
    userData.id = String(id);
    console.log('Update #' + userData.id);
    return this.userService.update(userData);
  }

  @Delete(':id')
  removeUser(@Param('id') user_id: string) {
    this.userService.delete(user_id);
    return null;
  }
}
