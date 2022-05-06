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
import { toggleAlarmNotification } from 'src/utilities/notifications';
import { AlarmsService } from './alarms.service';

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
      const tokens = (await this.usersService.findUser(req.user.email))
        .androidId;
      toggleAlarmNotification(alarm, tokens);
    });
  }

  //   @Put()
  //   updateSensor(@Body() data: updateSensorDto) {
  //     return this.sensorsService.updateSensor(data);
  //   }
}
