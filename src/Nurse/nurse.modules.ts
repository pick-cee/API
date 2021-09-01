import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { nurseController } from './nurse.controller';
import { Nurse } from './nurse.entities';
import { nurseServices } from './nurse.services';

@Module({
  imports: [TypeOrmModule.forFeature([Nurse])],
  providers: [nurseServices],
  controllers: [nurseController],
})
export class NurseModules {}
