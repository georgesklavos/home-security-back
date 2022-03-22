import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Sensor } from 'src/schemas/sensor.schema';
import { SensorsService } from './sensors.service';
import { updateSensorDto } from './updateSensor.dto';

@Controller('sensors')
export class SensorsController {
  constructor(private sensorsService: SensorsService) {}

  @Post()
  createSensor(@Body() data): Promise<Sensor> {
    return this.sensorsService.createSensor(data);
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
