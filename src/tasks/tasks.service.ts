import { Injectable, NotFoundException } from '@nestjs/common';
import ITask, { Priority, Status } from './task.model';
import CreateTaskDto from './DTOs/create-task.dto';
import UpdateTaskDto from './DTOs/update-task.dto';

@Injectable()
export class TasksService {
  private mockTasks: ITask[] = [
    {
      id: 'b3e8f157-91af-4258-87cb-d921d19d65c0',
      title: 'Implement JWT authentication',
      description: 'Set up login, signup, and token verification routes.',
      status: Status.IN_PROGRESS,
      priority: Priority.HIGH,
      dueDate: new Date('2025-12-01T18:00:00Z'),
      createdById: 'user-001',
      assignedToId: 'user-002', // explicitly assigned to another user
      createdAt: new Date('2025-11-01T10:23:00Z'),
      updatedAt: new Date('2025-11-05T14:45:30Z'),
      completedAt: null,
    },
    {
      id: '789ac7c3-a8cb-4f0d-98d6-6d9f64b39f90',
      title: 'Create Swagger documentation',
      description: 'Document file upload routes and model schemas.',
      status: Status.OPEN,
      priority: Priority.MEDIUM,
      dueDate: new Date('2025-12-10T12:00:00Z'),
      createdById: 'user-003',
      assignedToId: null, // assigned to creator implicitly
      createdAt: new Date('2025-11-02T09:00:00Z'),
      updatedAt: new Date('2025-11-02T09:00:00Z'),
      completedAt: null,
    },
    {
      id: 'a1d7cbb8-1b47-474d-9b7c-28288f48d923',
      title: 'Fix Cloudinary upload bug',
      description:
        'Ensure image upload_stream properly resolves and returns URL.',
      status: Status.COMPLETED,
      priority: Priority.CRITICAL,
      dueDate: new Date('2025-11-20T17:00:00Z'),
      createdById: 'user-001',
      assignedToId: null, // assigned to creator implicitly
      createdAt: new Date('2025-11-03T11:30:00Z'),
      updatedAt: new Date('2025-11-05T16:10:00Z'),
      completedAt: new Date('2025-11-05T16:10:00Z'),
    },
    {
      id: 'e9f0fbc1-27c9-4522-8afc-c9cbe4f4fa4b',
      title: 'Refactor task service',
      description: 'Improve error handling and add pagination support.',
      status: Status.OPEN,
      priority: Priority.LOW,
      dueDate: new Date('2025-12-15T15:00:00Z'),
      createdById: 'user-004',
      assignedToId: null, // assigned to creator implicitly
      createdAt: new Date('2025-11-04T13:45:00Z'),
      updatedAt: new Date('2025-11-04T13:45:00Z'),
      completedAt: null,
    },
  ];

  public findAll(): ITask[] {
    return this.mockTasks;
  }

  public findById(id: string): ITask {
    return this.findOneOrFail(id);
  }

  public createTask(dto: CreateTaskDto): ITask {
    const newTask: ITask = {
      id: 'newId',
      status: Status.OPEN,
      createdAt: new Date(),
      updatedAt: new Date(),
      completedAt: null,
      ...dto,
    };
    this.mockTasks.push(newTask);
    return newTask;
  }

  public updateTask(id: string, dto: UpdateTaskDto): ITask {
    const task = this.findOneOrFail(id);

    Object.entries(dto).forEach(([key, value]) => {
      if (value !== undefined) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        task[key] = value;
      }
    });

    task.updatedAt = new Date();
    return task;
  }

  public deleteTask(id: string): string {
    const task = this.findOneOrFail(id);
    this.mockTasks = this.mockTasks.filter((t) => t.id !== task.id);
    return 'Task deleted successfully';
  }

  private findOneOrFail(id: string): ITask {
    const task = this.mockTasks.find((task) => task.id === id);
    if (!task) throw new NotFoundException(`Task with id of ${id} not found`);
    return task;
  }
}
