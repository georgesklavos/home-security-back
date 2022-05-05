import {
  Controller,
  Get,
  Param,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGaurd } from 'src/auth/jwt.auth.gaurd';
import { IsClient } from 'src/guards/isClient.guard';
import { Alarm } from 'src/schemas/alarm.schema';
import { UsersService } from 'src/users/users.service';
import { AlarmsService } from './alarms.service';
import admin = require('firebase-admin');

@UseGuards(JwtAuthGaurd, IsClient)
@Controller('limited/alarms')
export class AlarmsController {
  constructor(
    private alarmsService: AlarmsService,
    private usersService: UsersService,
  ) {}

  @Get()
  getAlarms(@Request() req): Promise<Alarm[]> {
    return this.alarmsService.getAlarms(req);
  }

  @Put('/:id')
  toggleAlarm(@Request() req, @Param('id') alarmId: string) {
    return this.alarmsService.toggleAlarm(req, alarmId).then(async (alarm) => {
      try {
        const tokens = (await this.usersService.findUser(req.user.email))
          .androidId;
        const message = {
          notification: {
            title: 'Update alarm',
            body: `Your alarm ${alarm.name} has been ${
              !alarm.active ? 'activated' : 'deactivated'
            }`,
          },
          tokens,
        };
        console.log(admin);
        await admin
          .messaging()
          .sendMulticast(message)
          .then((res) => {
            console.log('Good');
            console.log(res);
          })
          .catch((err) => {
            console.log('Bad');
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    });
  }

  //   @Put()
  //   updateSensor(@Body() data: updateSensorDto) {
  //     return this.sensorsService.updateSensor(data);
  //   }
}
