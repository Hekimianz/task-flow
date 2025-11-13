import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import type ITask from './task.model';
import CreateTaskDto from './DTOs/create-task.dto';
import UpdateTaskDto from './DTOs/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  public findAll(): ITask[] {
    return this.tasksService.findAll();
  }

  @Get(':id')
  public findById(@Param('id') id: string): ITask {
    return this.tasksService.findById(id);
  }

  @Post()
  public createTask(@Body() createTaskDto: CreateTaskDto): ITask {
    return this.tasksService.createTask(createTaskDto);
  }

  @Patch(':id')
  public updateTask(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ): ITask {
    return this.tasksService.updateTask(id, updateTaskDto);
  }

  @Delete(':xid')
  public deleteTask(@Param('id') id: string): string {
    return this.tasksService.deleteTask(id);
  }
}
