import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Censor } from 'src/schemas/censor.schema';
import { CensorsService } from './censors.service';
import { updateSensorDto } from './updateSensor.dto';

@Controller('censors')
export class CensorsController {
  constructor(private censorsService: CensorsService) {}

  @Post()
  createCensor(@Body() data): Promise<Censor> {
    return this.censorsService.createCensor(data);
  }

  @Get(':id')
  getCensors(@Param('id') alarmId: string): Promise<Censor[]> {
    return this.censorsService.getCensors(alarmId);
  }

  @Put()
  updateSensor(@Body() data: updateSensorDto) {
    return this.censorsService.updateCensor(data);
  }
}
