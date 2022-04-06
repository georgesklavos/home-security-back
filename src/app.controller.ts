import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import axios from 'axios';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.gaurd';

@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private readonly appService: AppService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req) {
    console.log(this.authService.login(req.user));
    return this.authService.login(req.user);
  }

  // @Post('notification')
  // async sendNotification() {
  //   try {
  //     await axios.post(
  //       `https://fcm.googleapis.com/fcm/send`,
  //       {
  //         message: '3x1',
  //       },
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Authorization': `key=${process.env.FIREBASE_TOKEN}`,
  //         },
  //       },
  //     );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
}
