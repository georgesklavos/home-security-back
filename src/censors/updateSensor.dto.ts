import { IsDefined, IsMongoId, IsString } from 'class-validator';

export class updateSensorDto {
  @IsDefined()
  @IsMongoId()
  id: string;

  @IsDefined()
  @IsString()
  name: string;
}
