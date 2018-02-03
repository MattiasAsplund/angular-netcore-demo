import {Injectable} from '@angular/core';
import {Genre} from '../../genre';
import {Observable} from 'rxjs/Observable';
import {Chinook} from './chinook';
import {HttpClient} from '@angular/common/http';
import {Endpoint} from '../endpoints/api.endpoint';

@Injectable()
export class ChinookService implements Chinook {

  constructor(public httpClient: HttpClient) {
  }

  genres(): Observable<Genre[]> {
    return this.httpClient.get<Genre[]>(Endpoint.genres);
  }
}
