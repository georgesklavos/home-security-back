import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Alarm, AlarmDocument } from 'src/schemas/alarm.schema';
import { Model } from 'mongoose';

@Injectable()
export class AlarmsService {
  constructor(
    @InjectModel(Alarm.name) private alarmModel: Model<AlarmDocument>,
  ) {}

  async getAlarms({ user }): Promise<Alarm[]> {
    return await this.alarmModel.find({ userId: user.id });
  }

  async toggleAlarm({ user }, alarmId) {
    const alarm = await this.alarmModel.findOne({
      _id: alarmId,
      userId: user.id,
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
