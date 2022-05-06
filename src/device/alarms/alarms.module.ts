import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Alarm, AlarmSchema } from 'src/schemas/alarm.schema';
import { UsersModule } from 'src/users/users.module';
import { AlarmsController } from './alarms.controller';
import { AlarmsService } from './alarms.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Alarm.name, schema: AlarmSchema }]),
    UsersModule,
  ],
  controllers: [AlarmsController],
  providers: [AlarmsService],
})
export class AlarmsDeviceModule {}
