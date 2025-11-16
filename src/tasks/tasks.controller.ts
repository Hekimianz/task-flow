import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import CreateTaskDto from './DTOs/create-task.dto';
import UpdateTaskDto from './DTOs/update-task.dto';
import Task from './tasks.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  public findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  public findById(@Param('id', new ParseUUIDPipe()) id: string): Promise<Task> {
    return this.tasksService.findById(id);
  }

  @Post()
  public createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  @Patch(':id')
  public updateTask(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<Task> {
    return this.tasksService.updateTask(id, updateTaskDto);
  }

  @Patch('/complete/:id')
  public completeTask(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<Task> {
    return this.tasksService.completeTask(id);
  }

  @Delete(':id')
  public deleteTask(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<string> {
    return this.tasksService.deleteTask(id);
  }
}
