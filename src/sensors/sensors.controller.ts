import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGaurd } from 'src/auth/jwt.auth.gaurd';
import { IsAdmin } from 'src/guards/isAdmin.guard';
import { Sensor } from 'src/schemas/sensor.schema';
import { SensorsService } from './sensors.service';
import { updateSensorDto } from './updateSensor.dto';
@UseGuards(JwtAuthGaurd, IsAdmin)
@Controller('sensors')
export class SensorsController {
  constructor(private sensorsService: SensorsService) {}

  @Post()
  createSensor(@Body() data): Promise<Sensor> {
    return this.sensorsService.createSensor(data);
  }

  @Get()
  getAllSensors(): Promise<Sensor[]> {
    return this.sensorsService.getAllSensors();
  }

  @Get(':id')
  getSensors(@Param('id') alarmId: string): Promise<Sensor[]> {
    return this.sensorsService.getSensors(alarmId);
  }

  @Put()
  updateSensor(@Body() data: updateSensorDto) {
    return this.sensorsService.updateSensor(data);
  }
}
