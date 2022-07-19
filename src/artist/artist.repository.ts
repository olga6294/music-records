import databaseConnection from "../db/sqlite.connection";

export class ArtistRepository {

    getAllByGenre = (genre: string) => databaseConnection.prepare(
        "SELECT ArtistId, Name FROM artists " +
        "JOIN albums ON artists.ArtistId = albums.ArtistId " +
        "JOIN tracks ON albums.AlbumId = tracks.AlbumId " +
        "JOIN genres ON tracks.GenreId = genres.GenreId " +
        "WHERE genres.Name = ? ORDER BY genres.Name DESC").get(genre);

    getStats = () => databaseConnection.prepare(
        "SELECT artists.ArtistId, artists.Name, count(tracks.TrackId), Name FROM artists " +
        "JOIN albums ON artists.ArtistId = albums.ArtistId " +
        "JOIN tracks ON albums.AlbumId = tracks.AlbumId " +
        "GROUP BY artists.ArtistId");

    getAllAlbums = (id: number) => databaseConnection.prepare(
        "SELECT artists.ArtistId, artists.Name, albums.Title FROM artists " +
        "JOIN albums ON artists.ArtistId = albums.ArtistId " +
        "WHERE AlbumId = ?").get(id);

}
