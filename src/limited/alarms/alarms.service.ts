import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Alarm, AlarmDocument } from 'src/schemas/alarm.schema';
import { Model } from 'mongoose';

@Injectable()
export class AlarmsService {
  constructor(
    @InjectModel(Alarm.name) private alarmService: Model<AlarmDocument>,
  ) {}

  async getAlarms({ user }): Promise<Alarm[]> {
    return await this.alarmService.find({ userId: user.id });
  }
}
