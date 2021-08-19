import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { securityController } from './security.controller';
import { Security } from './security.entity';
import { securityServices } from './security.services';

@Module({
  imports: [TypeOrmModule.forFeature([Security])],
  providers: [securityServices],
  controllers: [securityController],
  exports: [securityServices],
})
export class SecurityModule {}
