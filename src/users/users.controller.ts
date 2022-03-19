import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { User } from 'src/schemas/user.schema';
import { CreateUserDto, GetUserDto } from './users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  async createUser(@Body() data: CreateUserDto): Promise<User> {
    return await this.userService.create(data);
  }
  @Get()
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }
}
