import {Component, OnInit, Inject} from '@angular/core';
import {Genre} from '../../genre';
import {Observable} from 'rxjs/Observable';
import {Chinook} from '../../shared/services/chinook';

@Component({
  selector: 'album-list-filter',
  templateUrl: './album-list-filter.component.html',
  styleUrls: ['./album-list-filter.component.scss']
})
export class AlbumListFilterComponent implements OnInit {
  genres: Observable<Genre[]>;

  constructor(@Inject('Chinook') private chinook: Chinook) {
  }

  ngOnInit() {
    this.genres = this.chinook.genres();
  }
}
