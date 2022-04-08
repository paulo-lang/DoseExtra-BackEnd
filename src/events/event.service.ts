import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AssertionError } from "assert";
import { Repository } from "typeorm";
import { CreateUpdateEventDto } from "./dto/create-update-event.dto";
import { Event } from "./event.entity";

@Injectable()
export class EventService {
    constructor(
        @InjectRepository(Event)
        private readonly eventRepository: Repository<Event>,
    ){}

    async obterTodos(): Promise<Event[]> {
        return await this.eventRepository.find();
    }

    async obterUm(id: string): Promise<Event | undefined> {
        return await this.eventRepository.findOneOrFail({id: id})
    }

    async criar(eventCreate: CreateUpdateEventDto) {
        const event = this.eventRepository.create(eventCreate)
        return await this.eventRepository.save(event)
    } 

    async alterar(id: string, eventUpdate: CreateUpdateEventDto) {

        try {
            const event = await this.obterUm(id)
            this.eventRepository.merge(event, eventUpdate)
            return await this.eventRepository.save(event)
        } catch
        {
            throw new AssertionError({ message: "Error at updating event" })
        }
        
    }

    async apagar(id: string) {
        await this.eventRepository.findOneOrFail({id})
        this.eventRepository.softDelete({id})
    }
}