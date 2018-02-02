import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Genre } from '../genre';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChinookService {

  constructor(public http: Http) { }

  genres() : any {
    return this.http.get("assets/chinook/genres.json");
  }
}
