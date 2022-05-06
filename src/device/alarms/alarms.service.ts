import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Alarm, AlarmDocument } from 'src/schemas/alarm.schema';
import { Model } from 'mongoose';

@Injectable()
export class AlarmsService {
  constructor(
    @InjectModel(Alarm.name)
    private alarmModel: Model<AlarmDocument>,
  ) {}

  async getAlarmStatus(alarmId): Promise<boolean> {
    return (await this.alarmModel.findOne({ _id: alarmId })).active;
  }

  async toggleAlarm(alarmId) {
    const alarm = await this.alarmModel.findOne({
      _id: alarmId,
    });
    if (!alarm) {
      throw new NotFoundException();
    }
    return this.alarmModel.findOneAndUpdate(
      { _id: alarmId },
      { $set: { active: !alarm.active } },
    );
  }
}
