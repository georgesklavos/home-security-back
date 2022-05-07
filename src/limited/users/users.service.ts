import { Injectable } from '@nestjs/common';
import { User, UserDocument } from 'src/schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { updatePasswordDto } from './updatePassword.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getProfile(req): Promise<User> {
    return await this.userModel.findOne({ _id: req.user.id });
  }

  async updatePassword(req, data: updatePasswordDto): Promise<User> {
    const user = await this.userModel.findOne({ _id: req.user.id });
    if (!user.loggedIn) {
      user.password = await bcrypt.hash(data.password, 10);
      user.loggedIn = true;
      await this.userModel.updateOne({ _id: req.user.id }, user);
    }
    return user;
  }
}
