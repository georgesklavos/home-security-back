import { IsDefined, IsString } from 'class-validator';

export class updatePasswordDto {
  @IsDefined()
  @IsString()
  password: string;
}
