import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGaurd } from 'src/auth/jwt.auth.gaurd';
import { IsAdmin } from 'src/guards/isClient.guard';
import { User } from 'src/schemas/user.schema';
import { CreateUserDto } from './users.dto';
import { UsersService } from './users.service';
@UseGuards(JwtAuthGaurd, IsAdmin)
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
