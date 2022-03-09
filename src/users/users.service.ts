import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import {User, UserDocument} from "../schemas/user.schema";
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './users.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<UserDocument>
    ) {} 

    async create(data: CreateUserDto): Promise<User> {
        const user = new this.userModel();
        return await user.save();
    }
}
