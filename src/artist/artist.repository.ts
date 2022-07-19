import databaseConnection from "../db/sqlite.connection";

export class ArtistRepository {

    getAllByGenre = (genre: string) => [{
        id: 1,
        name: "Sting"
    },
    {
        id: 2,
        name: "The Police"
    }];

    getStats = () => [{
        id: 1,
        name: "Sting",
        count: 2
    },
    {
        id: 2,
        name: "The Police",
        count: 3
    }];

    getAllAlbums = (id: number) => [{
        id: 1,
        name: "Sting",
        title: "Shape Of My Heart"
    },
    {
        id: 2,
        name: "The Police",
        title: "Every Breath You Take"
    }];

}
