import { ArtistController } from "./artist/artist.controller";
import { ArtistRepository } from "./artist/artist.repository";
import { ArtistService } from "./artist/artist.service";

const artistRepository = new ArtistRepository();
const artistService = new ArtistService(artistRepository);
const artistController = new ArtistController(artistService);

const controller = artistController.router;

export default controller;