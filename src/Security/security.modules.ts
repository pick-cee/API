import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Security } from './security.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Security])],
  providers: [],
  controllers: [],
})
export class SecurityModule {}
