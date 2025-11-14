import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvirontmentVariables } from './environment.config';
import * as Joi from 'joi';

export interface ConfigType {
  env: EnvirontmentVariables;
  database: TypeOrmModuleOptions;
}

export const configSchema = Joi.object({
  PORT: Joi.number().default(3000),
  DB_HOST: Joi.string().default('localhost'),
  DB_PORT: Joi.number().default('5432'),
  DB_USER: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_DATABASE: Joi.string().required(),
});
