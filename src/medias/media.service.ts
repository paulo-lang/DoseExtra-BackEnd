import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AssertionError } from "assert";
import { NotFoundError } from "rxjs";
import { FindConditions, FindOneOptions, Repository } from "typeorm";
import { CreateUpdateMediaDto } from "./dto/create-update-media.dto";
import { Media } from "./media.entity";

@Injectable()
export class MediaService {

    constructor(
        @InjectRepository(Media)
        private readonly mediaRepository: Repository<Media>
    ) { }

    async obterTodos(): Promise<Media[]> {
        const axios = require('axios')
        const medias = await this.mediaRepository.find();

        try {
            medias.map(async media => {
                let response = await axios.get(media.link)
                console.log(response.data.body)
            })
        } catch (error) {
            throw new AssertionError(error)
        }

        return medias
    }

    async obterUm(conditions: FindConditions<Media>, options?: FindOneOptions<Media>): Promise<Media | undefined> {

        try {
            return await this.mediaRepository.findOneOrFail(conditions, options)
        } catch (error) {
            throw new NotFoundError(error.message)
        }

    }

    async criar(mediaCreate: CreateUpdateMediaDto) {
        const media = this.mediaRepository.create(mediaCreate)
        return await this.mediaRepository.save(media)
    }

    async alterar(id: string, mediaUpdate: CreateUpdateMediaDto) {
997006456
        try {
            const media = await this.obterUm({ id })
            this.mediaRepository.merge(media, mediaUpdate)
            return await this.mediaRepository.save(media)
        } catch
        {
            throw new AssertionError({ message: "Error at updating event" })
        }

    }

    async apagar(id: string) {
        await this.mediaRepository.findOneOrFail({ id })
        this.mediaRepository.softDelete({ id })
    }
}