import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from './users.enum';
import {
  IsDateString,
  IsEmail,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import Task from 'src/tasks/tasks.entity';

@Entity()
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false, length: 50 })
  firstName: string;

  @Column({ nullable: false, length: 50 })
  lastName: string;

  @Column({ type: 'enum', enum: Role, nullable: false })
  role: Role;

  @Column()
  isActive: boolean;

  @CreateDateColumn({ nullable: false })
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @OneToMany(() => Task, (task) => task.createdById)
  tasks: Task[];
}
