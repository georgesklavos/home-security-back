import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Sensor, SensorDocument } from 'src/schemas/sensor.schema';
import { Model } from 'mongoose';
import { updateSensorDto } from './updateSensor.dto';

@Injectable()
export class SensorsService {
  constructor(
    @InjectModel(Sensor.name)
    private sensorModel: Model<SensorDocument>,
  ) {}

  async createSensor(data): Promise<Sensor> {
    const sensor = new this.sensorModel(data);
    return await sensor.save();
  }

  async getSensors(alarmId): Promise<Sensor[]> {
    return await this.sensorModel.find({ alarmId });
  }

  async updateSensor(data: updateSensorDto) {
    return await this.sensorModel.updateOne(
      { _id: data.id },
      { $set: { name: data.name } },
    );
  }
}
