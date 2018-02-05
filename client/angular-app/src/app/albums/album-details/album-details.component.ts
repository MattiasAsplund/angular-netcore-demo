import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Chinook} from '../../shared/interfaces/chinook';
import {ActivatedRoute, Router} from '@angular/router';
import {Track} from '../../shared/models/track';
import {slideInOutAnimation} from '../../shared/animations/slide-in-out.animation';
import {MatTableDataSource} from '@angular/material';
import 'rxjs/add/operator/first';
import {Location} from '@angular/common';

@Component({
  selector: 'album-details',
  templateUrl: './album-details.component.html',
  animations: [slideInOutAnimation],
  host: {'[@slideInOutAnimation]': ''}
})
export class AlbumDetailsComponent {

  get dataSource(): MatTableDataSource<Track> {
    return this._dataSource;
  }

  set dataSource(value: MatTableDataSource<Track>) {
    this._dataSource = value;
  }

  private _dataSource = new MatTableDataSource<Track>();

  constructor(@Inject('Chinook') private chinookService: Chinook,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.getTracksByAlbumId();
  }

  getTracksByAlbumId() {
    this.chinookService.tracksByAlbum(+this.activatedRoute.snapshot.params['albumid'])
      .first()
      .subscribe((tracks: Track[]) => {
          this.dataSource = new MatTableDataSource<Track>(tracks);
        }
      );
  }

  close() {
    this.router.navigate(['albums'],
      {
        preserveFragment: true,
        preserveQueryParams: true
      });
  }
}
