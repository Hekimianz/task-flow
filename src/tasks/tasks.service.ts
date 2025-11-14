import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import CreateTaskDto from './DTOs/create-task.dto';
import TasksRepository from './tasks.repository';
import Task from './tasks.entity';
import UpdateTaskDto from './DTOs/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: TasksRepository) {}

  public async findAll(): Promise<Task[]> {
    return await this.tasksRepository.findAll();
  }

  public async findById(id: string): Promise<Task> {
    const task = await this.tasksRepository.findById(id);
    return task ?? this.notFound(id);
  }

  public async createTask(dto: CreateTaskDto): Promise<Task> {
    try {
      const newTask = await this.tasksRepository.createTask(dto);
      return newTask;
    } catch (error) {
      throw new BadRequestException('Error creating new task: ' + error);
    }
  }

  public async updateTask(id: string, dto: UpdateTaskDto): Promise<Task> {
    const updatedTask = await this.tasksRepository.updateTask(id, dto);
    return updatedTask ?? this.notFound(id);
  }

  public async deleteTask(id: string): Promise<string> {
    const deleted = await this.tasksRepository.deleteTask(id);
    if (!deleted) this.notFound(id);
    return 'Task deleted.';
  }

  private notFound(id: string): never {
    throw new NotFoundException(`No task with the id ${id} found.`);
  }
}
