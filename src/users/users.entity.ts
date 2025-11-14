import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './users.model';

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

  @Column()
  role: Role;

  @Column()
  isActive: boolean;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
