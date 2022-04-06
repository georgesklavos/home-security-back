import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGaurd } from 'src/auth/jwt.auth.gaurd';
import { IsClient } from 'src/guards/isClient.guard';
import { Alarm } from 'src/schemas/alarm.schema';
import { AlarmsService } from './alarms.service';

@UseGuards(JwtAuthGaurd, IsClient)
@Controller('limited/alarms')
export class AlarmsController {
  constructor(private alarmsService: AlarmsService) {}

  @Get()
  getSensors(@Request() req): Promise<Alarm[]> {
    return this.alarmsService.getAlarms(req);
  }

  //   @Put()
  //   updateSensor(@Body() data: updateSensorDto) {
  //     return this.sensorsService.updateSensor(data);
  //   }
}
