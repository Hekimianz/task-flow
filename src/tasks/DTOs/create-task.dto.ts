import { IsDateString, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Priority } from '../tasks.enum';

export default class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(Priority)
  @IsNotEmpty()
  priority: Priority;

  @IsDateString()
  @IsNotEmpty()
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
