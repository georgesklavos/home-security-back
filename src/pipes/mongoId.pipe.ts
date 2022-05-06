import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { ObjectId } from 'mongodb';

@Injectable()
export class ValidateMongoId implements PipeTransform<string> {
  transform(value: string, metadata: ArgumentMetadata): string {
    if (ObjectId.isValid(value)) {
      if (String(new ObjectId(value)) === value) return value;
      throw new HttpException('Invalid mongodb id', HttpStatus.BAD_REQUEST);
    }
    throw new HttpException('Invalid mongodb id', HttpStatus.BAD_REQUEST);
  }
}
