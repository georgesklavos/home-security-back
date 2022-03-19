import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto, GetUserDto } from './users.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async create(data: CreateUserDto): Promise<User> {
    data.password = await bcrypt.hash(data.password, 10);
    const user = new this.userModel(data);
    return await user.save();
  }

  async getUsers(): Promise<User[]> {
    return await this.userModel.find({ admin: false }).exec();
  }
}
