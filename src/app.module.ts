import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AlarmsModule } from './alarms/alarms.module';
import { MongooseModule } from '@nestjs/mongoose';
// import { constants } from './constants';
import { SensorsModule } from './sensors/sensors.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { AlarmsLimitedModule } from './limited/alarms/alarms.module';
import { SensorsLimitedModule } from './limited/sensors/sensors.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    UsersModule,
    AlarmsModule,
    MongooseModule.forRoot(process.env.DATABASE_URL),
    SensorsModule,
    AuthModule,
    AlarmsLimitedModule,
    SensorsLimitedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
