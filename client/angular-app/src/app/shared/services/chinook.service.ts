import {Injectable} from '@angular/core';
import {Genre} from '../models/genre';
import {Observable} from 'rxjs/Observable';
import {Chinook} from '../interfaces/chinook';
import {HttpClient} from '@angular/common/http';
import {Endpoint} from '../endpoints/api.endpoint';
import {Album} from '../models/album';
import {Track} from '../models/track';

@Injectable()
export class ChinookService implements Chinook {

  constructor(public httpClient: HttpClient) {
  }

  genres(): Observable<Genre[]> {
    return this.httpClient.get<Genre[]>(Endpoint.genres);
  }

  albumsByGenre(genreId: number): Observable<Album[]> {
    return this.httpClient.get<Album[]>(Endpoint.albumsByGenre(genreId));
  }

  tracksByAlbum(albumId: number): Observable<Track[]> {
    return this.httpClient.get<Track[]>(Endpoint.tracksByAlbum(albumId));
  }
}
