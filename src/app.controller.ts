import { Headers } from '@nestjs/common';
import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.gaurd';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private readonly appService: AppService,
    private readonly usersService: UsersService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Headers() headers) {
    await this.usersService.updateAndroidToken(req, headers.androidtoken);
    return this.authService.login(req.user);
  }
}
