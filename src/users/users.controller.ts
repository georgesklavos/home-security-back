import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto, GetUserDto } from './users.dto';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
    constructor(private userService: UsersService) {}

    @Post("user")
    async createUser(@Body() data: CreateUserDto): Promise<GetUserDto> {
        return await this.userService.create(data);
    }

    @Get("user")
    async getUsers(): Promise<GetUserDto[]> {
        return await this.userService.getUsers();
    }
}
