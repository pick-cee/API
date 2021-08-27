import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AccManModules } from 'src/AccountManager/Acc_Man-Modules';
import { AuthenticationController } from './authentication.controller';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [AccManModules, PassportModule],
  providers: [AuthenticationService, LocalStrategy],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}
