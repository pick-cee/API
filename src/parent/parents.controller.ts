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
import { Parent } from './parent.entity';
import { parentService } from './parents.service';
import * as bcrypt from 'bcrypt';
import { LocalAuthenticationGuard } from 'src/authentication/localAuthentication.guard';
import RequestWithUser from 'src/authentication/requestWithUser.interface';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('parent')
export class ParentsController {
  constructor(private readonly parentsService: parentService) {}

  @Post('create')
  @UseInterceptors(FileInterceptor('profile_pic'))
  async uploadedFile(
    @Body() parentData: Parent,
    @UploadedFile() profile_pic: Express.Multer.File,
  ) {
    const hashedPassword = await bcrypt.hash(parentData.password, 10);
    const createdUser = await this.parentsService.createPar({
      ...parentData,
      password: hashedPassword,
    });
    createdUser.password = undefined;
    return {
      parentData,
      file: profile_pic.buffer.toString(),
      createdUser,
    };
  }

  @Get(':email')
  getSingle(@Param('email') parent_email: string) {
    return this.parentsService.getByEmail(parent_email);
  }

  @Get()
  getAll(): Promise<Parent[]> {
    return this.parentsService.findAll();
  }

  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('log-in')
  async logIn(@Req() request: RequestWithUser) {
    const user = request.parent;
    user.password = undefined;
    return user;
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() parData: Parent): Promise<any> {
    parData.id = String(id);
    console.log('Update #' + parData.id);
    return this.parentsService.update(parData);
  }

  @Delete(':id')
  removeParent(@Param('id') parent_id: string) {
    this.parentsService.delete(parent_id);
    return null;
  }
}
