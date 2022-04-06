import { IsDefined, IsEmail, IsOptional, IsString } from 'class-validator';

export class loginDto {
  @IsDefined()
  @IsEmail()
  email: string;

  @IsDefined()
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  androidId: string;
}
