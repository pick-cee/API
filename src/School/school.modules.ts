import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { schoolController } from './school.controller';
import { School } from './school.entities';
import { schoolServices } from './school.services';

@Module({
  imports: [TypeOrmModule.forFeature([School])],
  providers: [schoolServices],
  controllers: [schoolController],
})
export class SchoolModule {}
