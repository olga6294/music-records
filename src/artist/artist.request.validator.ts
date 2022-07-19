import { Request, Response, NextFunction } from "express";

export const validateArtistIdParam = (request: Request, response: Response, next: NextFunction) => {
    const artistId = +(request.params.id);
    if (Number.isNaN(artistId)) {
        response.sendStatus(400);
    }
    return next();
}