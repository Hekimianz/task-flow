import { Injectable, NotFoundException } from '@nestjs/common';
import IUser, { Role } from './users.model';
import UpdateUserDto from './DTOs/update-user.dto';

@Injectable()
export class UsersService {
  private mockUsers: IUser[] = [
    {
      id: 'user-001',
      email: 'admin@example.com',
      password: '$2b$10$abcdefghijklmnopqrstuv1234567890abcd', // mock bcrypt-ish hash
      firstName: 'Alice',
      lastName: 'Rivera',
      role: Role.ADMIN,
      isActive: true,
      createdAt: new Date('2025-10-28T10:00:00Z'),
      updatedAt: new Date('2025-11-05T14:30:00Z'),
    },
    {
      id: 'user-002',
      email: 'john.doe@example.com',
      password: '$2b$10$1234567890abcdefghijklmnopqrstuvabcd',
      firstName: 'John',
      lastName: 'Doe',
      role: Role.USER,
      isActive: true,
      createdAt: new Date('2025-10-29T09:15:00Z'),
      updatedAt: new Date('2025-11-03T16:50:00Z'),
    },
    {
      id: 'user-003',
      email: 'sarah.lee@example.com',
      password: '$2b$10$7890abcdefghijklm1234567890nopqrstuv',
      firstName: 'Sarah',
      lastName: 'Lee',
      role: Role.USER,
      isActive: true,
      createdAt: new Date('2025-10-30T12:20:00Z'),
      updatedAt: new Date('2025-11-02T10:10:00Z'),
    },
    {
      id: 'user-004',
      email: 'superuser@example.com',
      password: '$2b$10$lmno1234567890abcdefghijklmnopqrstuv',
      firstName: 'Victor',
      lastName: 'Martinez',
      role: Role.SUPER,
      isActive: true,
      createdAt: new Date('2025-10-25T08:45:00Z'),
      updatedAt: new Date('2025-11-01T11:35:00Z'),
    },
  ];
  public findAll(): IUser[] {
    return this.mockUsers.filter((user) => user.isActive);
  }

  public findById(id: string): IUser {
    return this.findOneOrFail(id);
  }

  public updateUser(id: string, dto: UpdateUserDto): IUser {
    const user = this.findOneOrFail(id);

    Object.entries(dto).forEach(([key, value]) => {
      if (value !== undefined) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        user[key] = value;
      }
    });

    user.updatedAt = new Date();
    return user;
  }

  public deleteUser(id: string): string {
    const user = this.findOneOrFail(id);
    user.isActive = false;
    return 'User deleted';
  }

  private findOneOrFail(id: string) {
    const user = this.mockUsers.find((user) => user.id === id);
    if (!user || !user.isActive)
      throw new NotFoundException(`No user with id of ${id} found`);
    return user;
  }
}
