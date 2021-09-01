import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { classController } from './class.controllers';
import { Class } from './class.entity';
import { classServices } from './class.services';

@Module({
  imports: [TypeOrmModule.forFeature([Class])],
  providers: [classServices],
  controllers: [classController],
})
export class ClassModule {}
