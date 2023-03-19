import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Media } from './../entity/Media.entity';
import { Repository } from 'typeorm';
import {
    paginate,
    Pagination,
    IPaginationOptions,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class MediaService {
    constructor(
        @InjectRepository(Media)
        private mediaRepository: Repository<Media>,
    ) {}
    
    create(media: Media): Promise<Media> {
        return this.mediaRepository.save(
            this.mediaRepository.create(media)
        );
    }

    findAll(options: IPaginationOptions): Promise<Pagination<Media>> {
        return paginate<Media>(this.mediaRepository, options);
    }

    findOne(id: number): Promise<Media> {
        return this.mediaRepository.findOneBy({ id });
    }

    searchMedia(e: any): Promise<Media> {
        return this.mediaRepository
        .createQueryBuilder()
        .where('type = :type', { type: e })
        .where('description = :description', { description: e })
        .execute()
    }

    update(id: number, data: any): Promise<any> {
        return this.mediaRepository.save(data);
    }

    delete(id: number): Promise<any> {
        return this.mediaRepository.delete(id);
    }
}
