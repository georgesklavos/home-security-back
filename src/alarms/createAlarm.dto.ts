import { IsBoolean, IsDefined, IsMongoId } from 'class-validator';

export class createAlarmDto {
  @IsDefined()
  @IsMongoId()
  userId: string;

  @IsDefined()
  @IsBoolean()
  active: boolean;
}
