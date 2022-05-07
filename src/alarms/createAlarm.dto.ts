import { IsDefined, IsMongoId, IsString } from 'class-validator';

export class createAlarmDto {
  @IsDefined()
  @IsMongoId()
  userId: string;

  @IsDefined()
  @IsString()
  name: string;
}
