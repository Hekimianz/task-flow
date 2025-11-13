import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import type IUser from './users.model';
import UpdateUserDto from './DTOs/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public findAll(): IUser[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  public findById(@Param('id') id: string): IUser {
    return this.usersService.findById(id);
  }

  @Patch(':id')
  public updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): IUser {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  public deleteUser(@Param('id') id: string): string {
    return this.usersService.deleteUser(id);
  }
}
