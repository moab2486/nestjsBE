import { Module } from '@nestjs/common';
import { MediaModule } from './module/media.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config/ORMConfig';

@Module({
  imports: [TypeOrmModule.forRoot(config), MediaModule]
})

export class AppModule {}