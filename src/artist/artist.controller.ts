import { Router, Request, Response, NextFunction } from "express";
import { ArtistService } from "./artist.service";
import { validateArtistIdParam } from "./artist.request.validator";

export class ArtistController {
    router = Router();

    constructor(private artistService: ArtistService) {
        this.router.get('/artist', (request: Request, response: Response, next: NextFunction) => response.json(this.getAllByGenre(request.query.genre as string)));
        this.router.get('/artist/stats', (request: Request, response: Response, next: NextFunction) => response.json(this.getStats()));
        this.router.get('/artist/:id/albums', validateArtistIdParam, (request: Request, response: Response, next: NextFunction) => response.json(this.getAllAlbums(+request.params.id)));
    }

    getAllByGenre(genre: string) {
        return this.artistService.getAllByGenre(genre);
    }

    getStats() {
        return this.artistService.getStats();
    }

    getAllAlbums(id: number) {
        return this.artistService.getAllAlbums(id);
    }
}