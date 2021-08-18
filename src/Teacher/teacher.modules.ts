import { Module } from '@nestjs/common';
import { Teacher } from './teacher.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Teacher])],
  providers: [],
  controllers: [],
})
export class TeacherModule {}
