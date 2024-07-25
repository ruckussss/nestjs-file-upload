import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS if needed
  app.enableCors();

  // Set global prefix if needed (e.g., '/api')
  // app.setGlobalPrefix('api');

  // Apply global validation pipe if needed
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
