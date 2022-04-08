import { CreateUpdateMediaDto } from "./dto/create-update-media.dto";
import { Media } from './media.entity';
import { MediaService } from "./media.service";
export declare class MediaController {
    private readonly mediaService;
    constructor(mediaService: MediaService);
    obterTodos(): Promise<Media[]>;
    obterUm(id: string): Promise<Media>;
    criar(media: CreateUpdateMediaDto): Promise<void>;
    alterar(id: string, media: CreateUpdateMediaDto): Promise<Media>;
    apagar(id: string): Promise<void>;
}
