import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { reportController } from './report.controller';
import { Report } from './report.entities';
import { reportService } from './report.services';

@Module({
  imports: [TypeOrmModule.forFeature([Report])],
  providers: [reportService],
  controllers: [reportController],
})
export class ReportModules {}
