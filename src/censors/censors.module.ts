import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Censor, CensorSchema } from 'src/schemas/censor.schema';
import { CensorsController } from './censors.controller';
import { CensorsService } from './censors.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Censor.name, schema: CensorSchema }]),
  ],
  controllers: [CensorsController],
  providers: [CensorsService],
})
export class CensorsModule {}
