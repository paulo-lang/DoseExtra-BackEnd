import { FindConditions, FindOneOptions, Repository } from "typeorm";
import { CreateUpdateMediaDto } from "./dto/create-update-media.dto";
import { Media } from "./media.entity";
export declare class MediaService {
    private readonly mediaRepository;
    constructor(mediaRepository: Repository<Media>);
    obterTodos(): Promise<Media[]>;
    obterUm(conditions: FindConditions<Media>, options?: FindOneOptions<Media>): Promise<Media | undefined>;
    criar(mediaCreate: CreateUpdateMediaDto): Promise<Media>;
    alterar(id: string, mediaUpdate: CreateUpdateMediaDto): Promise<Media>;
    apagar(id: string): Promise<void>;
}
