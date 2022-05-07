import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGaurd } from 'src/auth/jwt.auth.gaurd';
import { IsAdmin } from 'src/guards/isAdmin.guard';
import { User } from 'src/schemas/user.schema';
import { CreateUserDto, UpdateUserDto } from './users.dto';
import { UsersService } from './users.service';
@UseGuards(JwtAuthGaurd, IsAdmin)
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  async createUser(@Body() data: CreateUserDto): Promise<User> {
    data.password = '12345';
    const tempUser = await this.userService.findUser(data.email);
    console.log(tempUser);
    if (tempUser) {
      throw new HttpException('Email in use', HttpStatus.BAD_REQUEST);
    }
    return await this.userService.create(data);
  }

  @Put()
  async updateUser(@Body() data: UpdateUserDto): Promise<User> {
    return await this.userService.updateUser(data);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }
}
