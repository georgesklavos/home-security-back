import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Sensor } from './sensor.schema';
import { User } from './user.schema';

export type TimelineDocument = Timeline & Document;

@Schema()
export class Timeline {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Sensor' })
  sensorId: Sensor;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  public userId: User;
  @Prop()
  name: string;
}

export const TimelineSchema = SchemaFactory.createForClass(Timeline);
