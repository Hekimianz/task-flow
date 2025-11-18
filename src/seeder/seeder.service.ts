import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from '../users/users.entity';
import { Role } from '../users/users.enum';
import { Repository } from 'typeorm';

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  public async seed() {
    const users: Partial<User>[] = [
      {
        email: 'test1@mail.com',
        password: 'password',
        firstName: 'Emilia',
        lastName: 'Gonzalez',
        role: Role.USER,
        isActive: true,
      },
      {
        email: 'test2@mail.com',
        password: 'password',
        firstName: 'Daniel',
        lastName: 'Johnson',
        role: Role.USER,
        isActive: true,
      },
      {
        email: 'test3@mail.com',
        password: 'password',
        firstName: 'Victoria',
        lastName: 'Rondo',
        role: Role.USER,
        isActive: true,
      },
    ];
    for (const userData of users) {
      const exists = await this.userRepository.findOne({
        where: { email: userData.email },
      });
      if (!exists) await this.userRepository.save(userData);
    }
  }
}
