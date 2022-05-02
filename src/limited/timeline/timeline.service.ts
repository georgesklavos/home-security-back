import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Timeline, TimelineDocument } from 'src/schemas/timeline.schema';
import { Model } from 'mongoose';

@Injectable()
export class TimelineService {
  constructor(
    @InjectModel(Timeline.name) private timelineModel: Model<TimelineDocument>,
  ) {}

  async createTimeline(data): Promise<Timeline> {
    const timeline = new this.timelineModel(data);
    return await timeline.save();
  }

  async getTimeline({ user }): Promise<Timeline[]> {
    return await this.timelineModel.find({ userId: user.id });
  }
}
