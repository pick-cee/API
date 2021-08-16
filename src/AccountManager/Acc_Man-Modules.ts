import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccManService } from './Acc_Man-Services';
import { AccManController } from './Acc_Man-Controller';
import { AccManager } from './Acc_Man-entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccManager])],
  providers: [AccManService],
  controllers: [AccManController],
})
export class AccManModules {}
