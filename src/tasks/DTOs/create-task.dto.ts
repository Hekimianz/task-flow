import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Priority } from '../tasks.enum';
import { IsFutureDate } from '../is-future-date.validator';

export default class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  title: string;

  @IsString()
  @IsOptional()
  @MaxLength(500)
  description: string;

  @IsEnum(Priority)
  @IsNotEmpty()
  priority: Priority;

  @IsDateString()
  @IsNotEmpty()
  @IsFutureDate({ message: 'dueDate must be a future date' })
  dueDate: string;

  @IsString()
  // @IsUUID()
  @IsNotEmpty()
  createdById: string;

  @IsString()
  @IsNotEmpty()
  // @IsUUID()
  assignedToId: string;
}
