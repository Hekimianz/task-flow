import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from './users.enum';
import { IsDateString } from 'class-validator';

@Entity()
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ type: 'enum', enum: Role })
  role: Role;

  @Column()
  isActive: boolean;

  @CreateDateColumn()
  @IsDateString()
  createdAt: string;

  @UpdateDateColumn()
  @IsDateString()
  updatedAt: string;
}
