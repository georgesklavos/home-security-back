import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AlarmsModule } from './alarms/alarms.module';
import { MongooseModule } from '@nestjs/mongoose';
import { constants } from './constants';
import { CensorsModule } from './censors/censors.module';

@Module({
  imports: [
    UsersModule,
    AlarmsModule,
    MongooseModule.forRoot(constants.dbUrl),
    CensorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
