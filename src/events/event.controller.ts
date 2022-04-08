import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { CreateUpdateEventDto } from "./dto/create-update-event.dto";
import { Event } from './event.entity';
import { EventService } from "./event.service";

@Controller('/api/v1/events')
export class EventController {
    constructor(private readonly eventService: EventService) {

    }

    @Get()
    async obterTodos(): Promise<Event[]> {
        return this.eventService.obterTodos();
    }

    @Get(':id')
    async obterUm(@Param('id', new ParseIntPipe()) id:string): Promise<Event> {
        return this.eventService.obterUm(id);
    }
    
    @UseGuards(AuthGuard('jwt'))
    @Post()
    async criar(@Body() event: CreateUpdateEventDto) {
        this.eventService.criar(event);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async alterar(@Param('id', new ParseIntPipe()) id: string, @Body() event: CreateUpdateEventDto){
        return this.eventService.alterar(id, event);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async apagar(@Param('id', new ParseIntPipe()) id:string) {
        this.eventService.apagar(id);
    }
}