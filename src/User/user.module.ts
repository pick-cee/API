import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userService } from './user.service';
import { userController } from './user.controller';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [userService],
  controllers: [userController],
  exports: [userService],
})
export class UserModules {}
