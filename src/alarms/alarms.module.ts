import { Module } from '@nestjs/common';
import { AlarmsService } from './alarms.service';

@Module({
  providers: [AlarmsService]
})
export class AlarmsModule {}
