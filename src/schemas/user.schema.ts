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
  @Prop()
  password: string;
  @Prop({ default: false })
  admin: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
