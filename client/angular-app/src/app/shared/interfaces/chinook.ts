import {Album} from '../models/album';
import {Observable} from 'rxjs/Observable';
import {TracksByAlbum} from '../models/track';
import {Genre} from '../models/genre';

export interface Chinook {
  genres(): Observable<Genre[]>;

  // noinspection JSUnusedLocalSymbols
  albumsByGenre(genreId: number): Observable<Album[]>;

  tracksByAlbum(albumId: number): Observable<TracksByAlbum>;
}
