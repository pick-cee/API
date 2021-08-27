import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccManService } from './Acc_Man-Services';
import { AccManController } from './Acc_Man-Controller';
import { AccManager } from './Acc_Man-entity';
import { AuthenticationService } from 'src/authentication/authentication.service';
import { AuthenticationController } from 'src/authentication/authentication.controller';
//import { AuthenticationModule } from 'src/authentication/authentication.module';

@Module({
  imports: [TypeOrmModule.forFeature([AccManager])],
  providers: [AccManService, AuthenticationService],
  controllers: [AccManController, AuthenticationController],
  exports: [AccManService],
})
export class AccManModules {}
