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

export default class UpdateTaskDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @MinLength(3)
  @MaxLength(100)
  title?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @MaxLength(500)
  description?: string;

  @IsEnum(Priority)
  @IsNotEmpty()
  @IsOptional()
  priority?: Priority;

  @IsOptional()
  @IsNotEmpty()
  @IsDateString()
  @IsFutureDate({ message: 'dueDate must be a future date' })
  dueDate?: string;
}
