import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res, HttpStatus, Query } from '@nestjs/common';
import { Request, Response } from 'express';
import { MediaService } from './../provider/media.service';
import { Media } from './../entity/Media.entity';
import { Pagination } from 'nestjs-typeorm-paginate';

@Controller('media')
export class MediaController {
    constructor(private mediaService: MediaService) {}

    @Post()
    async create(@Body() body: Media, @Res() res: Response) {
        const media = await this.mediaService.create(body);
        if(!media) {
            res.status(HttpStatus.CREATED).send()
        }
        res.status(HttpStatus.CREATED).send();
        return [{
            message: "successfully created",
        }]
    }

    @Get()
    async findAll(
            @Query('page') page: number,
            @Query('limit') limit: number,
            @Res() res: Response
        ): Promise<Pagination<Media>> {
        limit = limit > 100 ? 100 : limit;
        res.status(HttpStatus.OK);
        return this.mediaService.findAll({
            page,
            limit
        });
    }

    @Get()
    async findOne(@Req() request: Request, @Param('id') id: number, @Res() res: Response) {
        const media = await this.mediaService.findOne(id)
        res.status(HttpStatus.OK);
        return [{
            message: "successfully",
            data: media
        }];
    }

    @Get()
    async searchMedia (@Req() request: Request, @Query() params: any, @Res() res: Response) {
        const media = this.mediaService.searchMedia(params.search);
        res.status(HttpStatus.OK);
        return [{
            message: "successfully",
            data: media
        }];
    }


    @Put(':id')
    async update(@Param('id') id: number, @Body() body: any, @Res() res: Response) {
        const newMedia: any = await this.mediaService.update(id, body)
        res.status(HttpStatus.OK);
        return [{
            message: "successfully updated",
            data: newMedia
        }];
    }

    @Delete(':id')
    async remove(@Param('id') id: number,  @Res() res: Response) {
        await this.mediaService.delete(id)
        res.status(HttpStatus.OK);
        return [{
            message: "successfully deleted"
        }];
    }
}