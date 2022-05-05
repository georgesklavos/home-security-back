import { Controller, Get, Param } from '@nestjs/common';
import { AlarmsService } from './alarms.service';

@Controller('device/alarms')
export class AlarmsController {
  constructor(private alarmsService: AlarmsService) {}

  @Get('/status/:id')
  async getAlarmStatus(@Param('id') alarmId: string): Promise<boolean> {
    return await this.alarmsService.getAlarmStatus(alarmId);
  }
}
