/* eslint-disable @typescript-eslint/no-unused-vars */
import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller, Get, Delete } from '@nestjs/common';
import { User } from './user.entity';
import { userService } from './user.service';
import * as bcrypt from 'bcrypt';

@Controller('user')
export class userController {
  constructor(private readonly userService: userService) {}

  @Post('create')
  async addUser(@Body() userData: User): Promise<any> {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    try {
      const createdUser = await this.userService.createUser({
        ...userData,
        password: hashedPassword,
      });
      createdUser.password = undefined;
      return createdUser;
    } catch (error) {
      return error;
    }
  }

  @Get(':email')
  getSingleAccMan(@Param('email') user_email: string) {
    return this.userService.getByEmail(user_email);
  }

  @Get()
  getAll(): Promise<User[]> {
    return this.userService.findAll();
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
