import { Controller, Get, Param, Put, Request, UsePipes } from '@nestjs/common';
import { ValidateMongoId } from 'src/pipes/mongoId.pipe';
import { UsersService } from 'src/users/users.service';
import { toggleAlarmNotification } from 'src/utilities/notifications';
import { AlarmsService } from './alarms.service';

@Controller('device/alarms')
export class AlarmsController {
  constructor(
    private alarmsService: AlarmsService,
    private usersService: UsersService,
  ) {}

  @Get('/status/:id')
  @UsePipes(new ValidateMongoId())
  async getAlarmStatus(@Param('id') alarmId: string): Promise<boolean> {
    return await this.alarmsService.getAlarmStatus(alarmId);
  }

  @Put('status/toggle/:id')
  @UsePipes(new ValidateMongoId())
  async toggleStatus(@Param('id') alarmId: string) {
    return this.alarmsService.toggleAlarm(alarmId).then(async (alarm) => {
      const tokens = (await this.usersService.findUserById(alarm.userId))
        .androidId;
      toggleAlarmNotification(alarm, tokens);
    });
  }
}
