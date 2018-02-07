import {Component, Inject, OnInit} from '@angular/core';
import {Genre} from '../../shared/models/genre';
import {Observable} from 'rxjs/Observable';
import {Chinook} from '../../shared/interfaces/chinook';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'album-list-filter',
  templateUrl: './album-list-filter.component.html',
  styleUrls: ['./album-list-filter.component.scss']
})
export class AlbumListFilterComponent implements OnInit {
  public genres: Observable<Genre[]>;
  public selectedGenre: any;

  constructor(@Inject('Chinook') private chinookService: Chinook,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.genres = this.chinookService.genres();
  }

  selectedGenreChanged(genreId: any): void {
    this.router.navigate(['/albums', genreId]);
  }

  isActiveRoute(genreId: any) {
    let id = this.activatedRoute.snapshot.params['genreId'];
    return genreId === 'all' ? true : +id === +genreId;
  }
}
