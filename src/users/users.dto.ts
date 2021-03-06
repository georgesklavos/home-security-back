import { Exclude } from 'class-transformer';
import { IsDefined, IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsDefined()
  @IsString()
  firstName: string;

  @IsDefined()
  @IsString()
  lastName: string;

  @IsDefined()
  @IsEmail()
  email: string;

  @IsOptional()
  password: string;
}

export class UpdateUserDto {
  @IsDefined()
  @IsString()
  firstName: string;

  @IsDefined()
  @IsString()
  lastName: string;

  @IsDefined()
  @IsEmail()
  email: string;
}

export class GetUserDto {
  @Exclude()
  _id: string;

  @Exclude()
  admin: boolean;

  @Exclude()
  password: string;

  @IsDefined()
  @IsString()
  firstName: string;

  @IsDefined()
  @IsString()
  lastName: string;

  @IsDefined()
  @IsEmail()
  email: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  @Exclude()
  __v: number;

  constructor(partial: Partial<GetUserDto>) {
    Object.assign(this, partial);
  }
}
