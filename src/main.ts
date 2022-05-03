import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import admin = require('firebase-admin');
// import serviceAccount from './google.json';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api');
  admin.initializeApp({
    credential: admin.credential.cert({
      type: process.env.type,
      projectId: process.env.project_id,
      private_key_id: process.env.private_key_id,
      private_key: process.env.private_key.replace(/\\n/g, '\n'),
      client_email: process.env.client_email,
      client_id: process.env.client_id,
      auth_uri: process.env.auth_uri,
      token_uri: process.env.token_uri,
      auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
      client_x509_cert_url: process.env.client_x509_cert_url,
    } as admin.ServiceAccount),
  });
  const config = new DocumentBuilder()
    .setTitle('Personal alarm system')
    .setDescription('Api documentation for the personal alarm system')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
