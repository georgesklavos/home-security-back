import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Alarm } from './alarm.schema';

export type SensorDocument = Sensor & Document;

@Schema()
export class Sensor {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Alarm' })
  alarmId: Alarm;
  @Prop()
  name: string;
}

export const SensorSchema = SchemaFactory.createForClass(Sensor);
