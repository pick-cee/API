import {
  Body,
  Req,
  Controller,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AccManager } from 'src/AccountManager/Acc_Man-entity';
import RequestWithUser from './requestWithUser.interface';
import { LocalAuthenticationGuard } from './localAuthentication.guard';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('register')
  async register(@Body() accmanData: AccManager) {
    return this.authenticationService.register(accmanData);
  }

  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('log-in')
  async logIn(@Req() request: RequestWithUser) {
    const user = request.accMan;
    user.password = undefined;
    return user;
  }
}
