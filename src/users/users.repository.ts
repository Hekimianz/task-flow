import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from './users.entity';
import { Repository } from 'typeorm';
import UpdateUserDto from './DTOs/update-user.dto';

@Injectable()
export default class UsersRepository {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  public async findAll() {
    return await this.usersRepository.find();
  }

  public async findById(id: string): Promise<User | null> {
    const user = await this.findOneOrNull(id);
    if (!user) return null;
    return user;
  }

  public async updateUser(
    id: string,
    dto: UpdateUserDto,
  ): Promise<User | null> {
    const user = await this.findOneOrNull(id);
    if (!user) return null;
    Object.assign(user, dto);
    return await this.usersRepository.save(user);
  }

  public async deleteUser(id: string): Promise<string | null> {
    const user = await this.findOneOrNull(id);
    if (!user) return null;
    user.isActive = false;
    await this.usersRepository.save(user);
    return 'User deleted';
  }

  private async findOneOrNull(id: string): Promise<User | null> {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) return null;
    return user;
  }
}
