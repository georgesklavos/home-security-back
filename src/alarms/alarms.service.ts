import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Alarm, AlarmDocument } from 'src/schemas/alarm.schema';
import { Model } from 'mongoose';

@Injectable()
export class AlarmsService {
  constructor(
    @InjectModel(Alarm.name)
    private alarmModel: Model<AlarmDocument>,
  ) {}

  async createAlarm(data): Promise<Alarm> {
    const alarm = new this.alarmModel(data);
    return await alarm.save();
  }

  async getAlarms(userId): Promise<Alarm[]> {
    return await this.alarmModel.find({ userId });
  }
}
