import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Alarm } from './alarm.schema';

export type CensorDocument = Censor & Document;

@Schema()
export class Censor {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Alarm' })
  alarmId: Alarm;
  @Prop()
  name: string;
}

export const CensorSchema = SchemaFactory.createForClass(Censor);
