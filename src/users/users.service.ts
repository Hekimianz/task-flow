import { Injectable, NotFoundException } from '@nestjs/common';
import UpdateUserDto from './DTOs/update-user.dto';
import User from './users.entity';
import UsersRepository from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}
  public async findAll(): Promise<User[]> {
    return await this.usersRepository.findAll();
  }

  public async findById(id: string): Promise<User> {
    const user = await this.usersRepository.findById(id);
    return user ?? this.notFound(id);
  }

  public async updateUser(id: string, dto: UpdateUserDto): Promise<User> {
    const updatedUser = await this.usersRepository.updateUser(id, dto);
    return updatedUser ?? this.notFound(id);
  }

  public async deleteUser(id: string): Promise<string> {
    const deletedUser = await this.usersRepository.deleteUser(id);
    return deletedUser ?? this.notFound(id);
  }

  private notFound(id: string): never {
    throw new NotFoundException(`No user with id ${id} found.`);
  }
}
