import { reportService } from './report.services';
import { Controller } from '@nestjs/common';
import { Report } from './report.entities';
import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Delete } from '@nestjs/common';

@Controller('report')
export class reportController {
  constructor(private readonly reportServices: reportService) {}

  @Post('crete')
  async createReport(@Body() report: Report): Promise<any> {
    return await this.reportServices.createReport(report);
  }
  @Get()
  getAll(): Promise<Report[]> {
    return this.reportServices.findAll();
  }
  @Put(':id/update')
  async update(@Param('id') id, @Body() reportData: Report): Promise<any> {
    reportData.id = String(id);
    console.log('Update #' + reportData.id);
    return this.reportServices.update(reportData);
  }
  @Delete('id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.reportServices.delete(id);
  }
}
