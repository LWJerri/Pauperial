import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { RedocModule } from "@nicholas.braun/nestjs-redoc";
import { AppModule } from "./modules/app/app.module";
import { MainConfigService } from "./modules/config/config.service";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const conig = app.get<MainConfigService>(MainConfigService);
  const port = conig.get<number>("PORT") || 4500;

  app.useGlobalPipes(new ValidationPipe());

  const SwaggerConfig = new DocumentBuilder()
    .setTitle("Pauperial API")
    .setDescription("The Pauperial documentation page.")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, SwaggerConfig);

  await RedocModule.setup("/api", app, document, {});
  await app.listen(port);

  console.log(`[!]: API ready on ${port} port!`);
}

bootstrap();
