import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

const DEFAULT_PORT = 3300 as const;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const port = configService.get('base.port') || DEFAULT_PORT;
  const env = configService.get('base.env');
  const mode = configService.get('base.mode');

  console.log(`App is running on ${env} mode on port: ${port} ...`);
  await app.listen(port);
}
bootstrap();
