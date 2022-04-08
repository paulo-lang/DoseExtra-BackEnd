import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { CreateUpdateMediaDto } from "./dto/create-update-media.dto";
import { Media } from './media.entity';
import { MediaService } from "./media.service";

@Controller('/api/v1/medias')
export class MediaController {
    constructor(private readonly mediaService: MediaService) {

    }

    @Get()
    async obterTodos(): Promise<Media[]> {
        return this.mediaService.obterTodos();
    }

    @Get(':id')
    async obterUm(@Param('id', new ParseIntPipe()) id:string): Promise<Media> {
        return this.mediaService.obterUm({id});
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async criar(@Body() media: CreateUpdateMediaDto) {
        this.mediaService.criar(media);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async alterar(@Param('id', new ParseIntPipe()) id: string, @Body() media: CreateUpdateMediaDto){
        return this.mediaService.alterar(id, media);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async apagar(@Param('id', new ParseIntPipe()) id: string) {
        this.mediaService.apagar(id);
    }
}