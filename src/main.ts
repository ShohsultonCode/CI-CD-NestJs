import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ConfigService} from '@nestjs/config'
import { corsOptions } from './shared/options/cors.option';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService) 
  
  app.enableCors(corsOptions);
  app.setGlobalPrefix('api')
  const port = config.get('PORT') || 78050
  await app.listen(port, () => {
    console.log(port);
  });
}
bootstrap();
