import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { User } from './user.schema';

export type AlarmDocument = Alarm & Document;

@Schema({ timestamps: true })
export class Alarm {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: User;
  @Prop({ default: false })
  active: boolean;
}

export const AlarmSchema = SchemaFactory.createForClass(Alarm);
