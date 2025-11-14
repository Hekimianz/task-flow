import { registerAs } from '@nestjs/config';

export interface EnvirontmentVariables {
  port: number;
}

export const environmentVariables = registerAs(
  'env',
  (): EnvirontmentVariables => ({
    port: parseInt(process.env.PORT ?? '3000', 10),
  }),
);
