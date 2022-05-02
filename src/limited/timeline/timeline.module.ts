import { Module } from '@nestjs/common';
import { TimelineService } from './timeline.service';
import { TimelineController } from './timeline.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Timeline, TimelineSchema } from 'src/schemas/timeline.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Timeline.name, schema: TimelineSchema },
    ]),
  ],
  providers: [TimelineService],
  controllers: [TimelineController],
})
export class TimelineModule {}
