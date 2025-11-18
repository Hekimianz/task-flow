import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from './users.enum';

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
}
