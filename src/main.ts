import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigType } from './config/config.types';
import { EnvirontmentVariables } from './config/environment.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService<ConfigType>);
  const PORT = configService.get<EnvirontmentVariables>('env')?.port ?? 3000;

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );
  await app.listen(PORT);
  console.log(`✅ Server listening on port ${PORT}`);
}
void bootstrap();
