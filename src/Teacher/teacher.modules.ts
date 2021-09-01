import { Module } from '@nestjs/common';
import { Teacher } from './teacher.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { teacherServices } from './teacher.services';
import { teacherController } from './teacher.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Teacher])],
  providers: [teacherServices],
  controllers: [teacherController],
})
export class TeacherModule {}
