import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export default class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  lastName?: string;
}
