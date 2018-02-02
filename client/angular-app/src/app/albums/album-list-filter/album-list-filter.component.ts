import {Component, OnInit} from '@angular/core';
import { ChinookService } from '../../services/chinook.service';
import { Genre } from '../../genre';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'album-list-filter',
  templateUrl: './album-list-filter.component.html',
  styleUrls: ['./album-list-filter.component.scss']
})
export class AlbumListFilterComponent implements OnInit {

  constructor(chinook: ChinookService) {        
    chinook.genres().subscribe(genre => {
      this.genres = genre.json();
    });
  }

  genres: Genre[];

  ngOnInit() {
  }

}
