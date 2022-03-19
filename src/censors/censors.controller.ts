import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Censor } from 'src/schemas/censor.schema';
import { CensorsService } from './censors.service';

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
}
