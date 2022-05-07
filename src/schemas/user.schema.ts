import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop()
  firstName: string;
  @Prop()
  lastName: string;
  @Prop({ unique: true })
  email: string;
  @Prop({ default: '12345' })
  password: string;
  @Prop({ default: false })
  admin: boolean;
  @Prop({ default: '' })
  androidId: string[];
  @Prop({ default: false })
  loggedIn: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
