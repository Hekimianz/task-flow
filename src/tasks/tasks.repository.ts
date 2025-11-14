import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import Task from './tasks.entity';
import { InjectRepository } from '@nestjs/typeorm';
import CreateTaskDto from './DTOs/create-task.dto';
import { Status } from './task.model';
import UpdateTaskDto from './DTOs/update-task.dto';

@Injectable()
export default class TasksRepository {
  constructor(
    @InjectRepository(Task) private readonly tasksRepository: Repository<Task>,
  ) {}

  public async findAll(): Promise<Task[]> {
    return await this.tasksRepository.find();
  }

  public async findById(id: string): Promise<Task | null> {
    const task = await this.findOneOrNull(id);
    if (!task) return null;
    return task;
  }

  public async createTask(dto: CreateTaskDto): Promise<Task> {
    const newTask = this.tasksRepository.create({
      title: dto.title,
      description: dto.description,
      priority: dto.priority,
      dueDate: dto.dueDate,
      createdById: dto.createdById,
      assignedToId: dto.assignedToId ?? null,
      status: Status.OPEN,
    });
    return await this.tasksRepository.save(newTask);
  }

  public async updateTask(
    id: string,
    dto: UpdateTaskDto,
  ): Promise<Task | null> {
    const task = await this.findOneOrNull(id);
    if (!task) return null;
    Object.assign(task, dto);
    return await this.tasksRepository.save(task);
  }

  public async deleteTask(id: string): Promise<boolean> {
    const result = await this.tasksRepository.delete(id);
    return !!result.affected;
  }

  private findOneOrNull(id: string): Promise<Task | null> {
    return this.tasksRepository.findOneBy({ id });
  }
}
