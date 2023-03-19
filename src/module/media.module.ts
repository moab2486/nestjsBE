import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Media } from 'src/entity/Media.entity';

import { MediaController } from '../controller/media.controller';

import { MediaService } from '../provider/media.service';

@Module({
  imports: [TypeOrmModule.forFeature([Media])],
  controllers: [MediaController],
  providers: [MediaService],
})

export class MediaModule {}