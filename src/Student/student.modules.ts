import { Module } from '@nestjs/common';
import { Student } from './student.entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { studentController } from './student.contoller';
import { studentServices } from './student.services';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [studentServices],
  controllers: [studentController],
})
export class StudentModule {}
