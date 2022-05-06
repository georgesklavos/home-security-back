import { IsDefined, IsMongoId, IsString } from 'class-validator';

export class createSensorDto {
  @IsDefined()
  @IsMongoId()
  alarmId: string;

  @IsDefined()
  @IsString()
  name: string;
}
