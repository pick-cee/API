import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nurse } from './nurse.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Nurse])],
  providers: [],
  controllers: [],
})
export class NurseModules {}
