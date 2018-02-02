import { Injectable, Inject, isDevMode } from '@angular/core';
import { Http } from '@angular/http';
import { Genre } from '../genre';
import { Observable } from 'rxjs/Observable';
import { Chinook } from './chinook';

@Injectable()
export class ChinookService implements Chinook {

  constructor(public http: Http) { }

  genres() : any {
    if(!isDevMode())
      return this.http.get("api/genres");
    else 
      return this.http.get("assets/chinook/genres.json");
  }
}
