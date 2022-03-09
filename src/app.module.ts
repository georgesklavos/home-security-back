import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AlarmsModule } from './alarms/alarms.module';
import { MongooseModule } from '@nestjs/mongoose';
import { constants } from './constants';


@Module({
  imports: [UsersModule, AlarmsModule, MongooseModule.forRoot(constants.dbUrl)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
