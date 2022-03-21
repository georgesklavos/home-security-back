import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Alarm } from 'src/schemas/alarm.schema';
import { AlarmsService } from './alarms.service';
import { createAlarmDto } from './createAlarm.dto';

@Controller('alarms')
export class AlarmsController {
  constructor(private alarmsService: AlarmsService) {}

  @Post()
  async createAlarm(@Body() data: createAlarmDto): Promise<Alarm> {
    return await this.alarmsService.createAlarm(data);
  }

  @Get(':id')
  async getAlarms(@Param('id') userId: string): Promise<Alarm[]> {
    return await this.alarmsService.getAlarms(userId);
  }
}
