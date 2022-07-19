import { ArtistRepository } from "./artist.repository";

export class ArtistService {

    constructor(private artistRepository: ArtistRepository) {}

    getAllByGenre = (genre: string) => this.artistRepository.getAllByGenre(genre);

    getStats = () => this.artistRepository.getStats();

    getAllAlbums = (id: number) => this.artistRepository.getAllAlbums(id);

}