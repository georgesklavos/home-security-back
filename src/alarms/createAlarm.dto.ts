import { IsBoolean, IsDefined, IsMongoId, IsString } from 'class-validator';

export class createAlarmDto {
  @IsDefined()
  @IsMongoId()
  userId: string;

  @IsDefined()
  @IsBoolean()
  active: boolean;

  @IsDefined()
  @IsString()
  name: string;
}
