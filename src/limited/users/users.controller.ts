import { Body, Controller, Get, Put, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGaurd } from 'src/auth/jwt.auth.gaurd';
import { IsClient } from 'src/guards/isClient.guard';
import { User } from 'src/schemas/user.schema';
import { updatePasswordDto } from './updatePassword.dto';
import { UsersService } from './users.service';

@UseGuards(JwtAuthGaurd, IsClient)
@Controller('limited/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('profile')
  getProfile(@Request() req): Promise<User> {
    return this.usersService.getProfile(req);
  }

  @Put('password')
  updatePassword(
    @Request() req,
    @Body() data: updatePasswordDto,
  ): Promise<User> {
    return this.usersService.updatePassword(req, data);
  }
}
