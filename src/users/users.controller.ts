import { Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './users.dto';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
    constructor(private userService: UsersService) {}

    @Post("user")
    async createUser(data: CreateUserDto) {
        return await this.userService.create(data);
    }
}
