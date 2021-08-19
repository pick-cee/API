import { Module } from '@nestjs/common';
import { Student } from './student.entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [],
  controllers: [],
})
export class StudentModule {}
