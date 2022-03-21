import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Censor, CensorDocument } from 'src/schemas/censor.schema';
import { Model } from 'mongoose';
import { updateSensorDto } from './updateSensor.dto';

@Injectable()
export class CensorsService {
  constructor(
    @InjectModel(Censor.name)
    private censorModel: Model<CensorDocument>,
  ) {}

  async createCensor(data): Promise<Censor> {
    const censor = new this.censorModel(data);
    return await censor.save();
  }

  async getCensors(alarmId): Promise<Censor[]> {
    return await this.censorModel.find({ alarmId });
  }

  async updateCensor(data: updateSensorDto) {
    return await this.censorModel.updateOne(
      { _id: data.id },
      { $set: { name: data.name } },
    );
  }
}
