import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Param, Patch } from '@nestjs/common';
import { Controller, Get, Delete } from '@nestjs/common';
import { AccManModules } from './Acc_Man-Modules';
import { AccManService } from './Acc_Man-Services';

@Controller('accMan')
export class AccManController {
  constructor(private readonly accManService: AccManService): any {}

  @Post()
  addAccMan(
    @Body('id') accMan_id: string,
    @Body('email') accMan_email: string,
    @Body('password') accMan_password: string,
    @Body('school_id') accMan_schoolID: number,
  ) {
    const genAccMan = this.accManService.addAccMAnager(
      accMan_id,
      accMan_email,
      accMan_password,
      accMan_schoolID,
    );
    return { accMan: genAccMan };
  }
  @Get(':id')
  getSingleAccMan(@Param('id') accMan_id: string) {
    return this.accManService.getOne(accMan_id);
  }
  @Get()
  getAll() {
    return this.accManService.getAll();
  }

  @Patch('id')
  updateAccMan(
    @Param('id') accMan_id: string,
    @Body('email') accMan_email: string,
    @Body('password') accMan_password: string,
    @Body('school_id') accMan_schoolID: number,
  ) {
    this.accManService.updateAccMan(
      accMan_id,
      accMan_email,
      accMan_password,
      accMan_schoolID,
    );

    return null;
  }
  @Delete(':id')
  removeParent(@Param('id') accMan_id: string) {
    this.accManService.deleteAccMan(accMan_id);
    return null;
  }
}
