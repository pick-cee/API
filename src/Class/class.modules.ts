import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Class } from './class.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Class])],
  providers: [],
  controllers: [],
})
export class ClassModule {}
