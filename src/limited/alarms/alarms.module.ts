import { Module } from '@nestjs/common';
import { AlarmsService } from './alarms.service';
import { AlarmsController } from './alarms.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Alarm, AlarmSchema } from 'src/schemas/alarm.schema';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Alarm.name, schema: AlarmSchema }]),
    UsersModule,
  ],
  providers: [AlarmsService],
  controllers: [AlarmsController],
})
export class AlarmsLimitedModule {}
