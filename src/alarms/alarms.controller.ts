import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGaurd } from 'src/auth/jwt.auth.gaurd';
import { IsAdmin } from 'src/guards/isAdmin.guard';
import { Alarm } from 'src/schemas/alarm.schema';
import { AlarmsService } from './alarms.service';
import { createAlarmDto } from './createAlarm.dto';
@UseGuards(JwtAuthGaurd, IsAdmin)
@Controller('alarms')
export class AlarmsController {
  constructor(private alarmsService: AlarmsService) {}

  @Post()
  async createAlarm(@Body() data: createAlarmDto): Promise<Alarm> {
    return await this.alarmsService.createAlarm(data);
  }

  @Get()
  async getAllAlarms(): Promise<Alarm[]> {
    return await this.alarmsService.getAlarms();
  }

  @Get(':id')
  async getAlarmsByUser(@Param('id') userId: string): Promise<Alarm[]> {
    return await this.alarmsService.getAlarmsByUser(userId);
  }

  @Get('status/:id')
  async getAlarmStatus(@Param('id') alarmId: string): Promise<boolean> {
    return await this.alarmsService.getAlarmStatus(alarmId);
  }
}
