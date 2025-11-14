import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Priority, Status } from './task.model';

@Entity()
export default class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: Status;

  @Column()
  priority: Priority;

  @Column()
  dueDate: Date;

  @Column()
  createdById: string;

  @Column()
  assignedToId: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  completedAt: Date;
}
