import { Injectable, UseGuards } from '@nestjs/common';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto, GetUserDto, UpdateUserDto } from './users.dto';
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

  async updateUser(data: UpdateUserDto): Promise<User> {
    return await this.userModel.findOneAndUpdate({ email: data.email }, data);
  }

  async getUsers(): Promise<User[]> {
    return await this.userModel.find({ admin: false }).exec();
  }

  async findUser(email: string): Promise<User> {
    const tempUser = await this.userModel.findOne({ email });
    if (tempUser) {
      return await tempUser.toJSON();
    }
    return tempUser;
  }

  async findUserById(id): Promise<User> {
    return await this.userModel.findOne({ _id: id });
  }

  async updateAndroidToken({ user }, token: string) {
    console.log(user);
    console.log(token);
    return await this.userModel.updateOne(
      { _id: user._id },
      { $addToSet: { androidId: token } },
    );
  }
}
