import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Priority, Status } from './tasks.enum';
import { IsDateString } from 'class-validator';

@Entity()
export default class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'enum', enum: Status })
  status: Status;

  @Column({ type: 'enum', enum: Priority })
  priority: Priority;

  @Column({ type: 'timestamp' })
  @IsDateString()
  dueDate: string;

  @Column()
  createdById: string;

  @Column({ nullable: true })
  assignedToId: string;

  @CreateDateColumn({ type: 'timestamp' })
  @IsDateString()
  createdAt: string;

  @UpdateDateColumn({ type: 'timestamp' })
  @IsDateString()
  updatedAt: string;

  @Column({ type: 'timestamp', nullable: true })
  @IsDateString()
  completedAt: string;
}
