import { CreateUpdateEventDto } from "./dto/create-update-event.dto";
import { Event } from './event.entity';
import { EventService } from "./event.service";
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    obterTodos(): Promise<Event[]>;
    obterUm(id: string): Promise<Event>;
    criar(event: CreateUpdateEventDto): Promise<void>;
    alterar(id: string, event: CreateUpdateEventDto): Promise<Event>;
    apagar(id: string): Promise<void>;
}
