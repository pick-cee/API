import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { parentService } from './parents.service';
import { ParentsController } from './parents.controller';
import { Parent } from './parent.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Parent])],
  providers: [parentService],
  controllers: [ParentsController],
})
export class ParentsModules {}
