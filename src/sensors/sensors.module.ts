import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Sensor, SensorSchema } from 'src/schemas/sensor.schema';
import { SensorsController } from './sensors.controller';
import { SensorsService } from './sensors.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Sensor.name, schema: SensorSchema }]),
  ],
  controllers: [SensorsController],
  providers: [SensorsService],
})
export class SensorsModule {}
