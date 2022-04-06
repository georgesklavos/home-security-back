import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Sensor, SensorDocument } from 'src/schemas/sensor.schema';
import { Model } from 'mongoose';
import { Alarm, AlarmDocument } from 'src/schemas/alarm.schema';

@Injectable()
export class SensorsService {
  constructor(
    @InjectModel(Sensor.name) private sensorModel: Model<SensorDocument>,
    @InjectModel(Alarm.name) private alarmModel: Model<AlarmDocument>,
  ) {}

  async getSensors({ user }, alarmId): Promise<Sensor[]> {
    const alarmBelongs = await this.alarmModel.findOne({
      _id: alarmId,
      userId: user.id,
    });
    if (!alarmBelongs) {
      throw new ForbiddenException();
    }
    return await this.sensorModel.find({ alarmId });
  }
}
