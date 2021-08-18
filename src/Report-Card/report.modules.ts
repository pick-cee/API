import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Report } from './report.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Report])],
  providers: [],
  controllers: [],
})
export class ReportModules {}
