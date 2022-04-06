import { Controller, Get, Param, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGaurd } from 'src/auth/jwt.auth.gaurd';
import { IsClient } from 'src/guards/isClient.guard';
import { Sensor } from 'src/schemas/sensor.schema';
import { SensorsService } from './sensors.service';

@UseGuards(JwtAuthGaurd, IsClient)
@Controller('limited/sensors')
export class SensorsController {
  constructor(private sensorsService: SensorsService) {}

  @Get(':id')
  getSensors(@Request() req, @Param('id') alarmId: string): Promise<Sensor[]> {
    return this.sensorsService.getSensors(req, alarmId);
  }
}
