import { Repository } from "typeorm";
import { CreateUpdateEventDto } from "./dto/create-update-event.dto";
import { Event } from "./event.entity";
export declare class EventService {
    private readonly eventRepository;
    constructor(eventRepository: Repository<Event>);
    obterTodos(): Promise<Event[]>;
    obterUm(id: string): Promise<Event | undefined>;
    criar(eventCreate: CreateUpdateEventDto): Promise<Event>;
    alterar(id: string, eventUpdate: CreateUpdateEventDto): Promise<Event>;
    apagar(id: string): Promise<void>;
}
