import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export default class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @MinLength(2)
  @MaxLength(50)
  firstName?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @MinLength(2)
  @MaxLength(50)
  lastName?: string;
}
