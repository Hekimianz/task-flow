import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Priority } from '../task.model';

export default class UpdateTaskDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  title?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description?: string;

  @IsEnum(Priority)
  @IsNotEmpty()
  @IsOptional()
  priority?: Priority;

  @IsOptional()
  @IsNotEmpty()
  @IsDateString()
  dueDate?: string;
}
