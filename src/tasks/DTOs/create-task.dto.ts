import { IsDate, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Priority } from '../task.model';

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

  @IsDate()
  @IsNotEmpty()
  dueDate: Date;

  @IsString()
  @IsNotEmpty()
  createdById: string;

  @IsString()
  @IsNotEmpty()
  assignedToId: string;
}
