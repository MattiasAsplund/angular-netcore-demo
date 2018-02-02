import {Component, OnInit, Inject} from '@angular/core';
import { Genre } from '../../genre';
import { Observable } from 'rxjs/Observable';
import { Chinook } from '../../services/chinook';

@Component({
  selector: 'album-list-filter',
  templateUrl: './album-list-filter.component.html',
  styleUrls: ['./album-list-filter.component.scss']
})
export class AlbumListFilterComponent implements OnInit {

  constructor(@Inject("Chinook") chinook: Chinook) {        
    chinook.genres().subscribe(genre => {
      this.genres = genre.json();
    });
  }

  genres: Genre[];

  ngOnInit() {
  }

}
