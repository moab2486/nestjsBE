import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  await app.listen(5000)
  .then(()=>{
    console.log("Successfully started on port 5000")
  })
  .catch((err) => {
    console.log(err)
  })
}
bootstrap();
