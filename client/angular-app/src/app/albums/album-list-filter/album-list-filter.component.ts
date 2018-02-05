import {Component, OnInit, Inject} from '@angular/core';
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

  private generateUrlSlug(genre: any): string {
    if (genre === 'all') return genre;

    return `${genre.genreId}-${genre.name
      .replace(/\W/g, ' ')
      .replace(/\s\s+/g, ' ')
      .replace(/ /g, '_')}`;
  }

  selectedGenreChanged(genre: any): void {
    this.router.navigate(['/albums'], {
      queryParams: {
        g: this.generateUrlSlug(genre)
      }
    });
  }

  isActiveRoute(genre){
    return this.activatedRoute.snapshot.queryParams['g'] === this.generateUrlSlug(genre)
  }
}
