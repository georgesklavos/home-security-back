import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGaurd } from 'src/auth/jwt.auth.gaurd';
import { IsClient } from 'src/guards/isClient.guard';
import { Timeline } from 'src/schemas/timeline.schema';
import { TimelineService } from './timeline.service';

@UseGuards(JwtAuthGaurd, IsClient)
@Controller('limited/timeline')
export class TimelineController {
  constructor(private timelineService: TimelineService) {}

  @Get()
  getTimeline(@Request() req): Promise<Timeline[]> {
    return this.timelineService.getTimeline(req);
  }
}
