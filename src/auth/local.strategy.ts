import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(
    email: string,
    password: string,
    androidId: string,
  ): Promise<any> {
    const user = await this.authService.validateUser(email, password);
    console.log(androidId);
    if (!user) {
      throw new UnauthorizedException();
    }
    // axios.post(
    //   'https://fcm.googleapis.com/fcm/notification',
    //   {
    //     operation: 'add',
    //     notification_key_name: 'all',
    //     registration_ids: [androidId],
    //   },
    //   {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': `key=${process.env.FIREBASE_TOKEN}`,
    //       'project_id': process.env.PROJECT_ID,
    //     },
    //   },
    // );
    return user;
  }
}
