import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Alarm, AlarmSchema } from 'src/schemas/alarm.schema';
import { Sensor, SensorSchema } from 'src/schemas/sensor.schema';
import { SensorsController } from './sensors.controller';
import { SensorsService } from './sensors.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Alarm.name, schema: AlarmSchema },
      { name: Sensor.name, schema: SensorSchema },
    ]),
  ],
  controllers: [SensorsController],
  providers: [SensorsService],
})
export class SensorsLimitedModule {}
