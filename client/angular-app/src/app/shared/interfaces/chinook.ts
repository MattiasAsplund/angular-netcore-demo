import {Album} from '../models/album';
import {Observable} from 'rxjs/Observable';
import {Track} from '../models/track';
import {Genre} from '../models/genre';

export interface Chinook {
  genres(): Observable<Genre[]>;

  albumsByGenre(genreId: number): Observable<Album[]>;

  tracksByAlbum(albumId: number): Observable<Track[]>;
}
