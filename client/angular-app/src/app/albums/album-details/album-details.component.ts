import {Component, Inject} from '@angular/core';
import {Chinook} from '../../shared/interfaces/chinook';
import {ActivatedRoute, Router} from '@angular/router';
import {TracksByAlbum} from '../../shared/models/track';
import {slideInOutAnimation} from '../../shared/animations/slide-in-out.animation';
import 'rxjs/add/operator/first';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss'],
  animations: [slideInOutAnimation],
  host: {'[@slideInOutAnimation]': ''}
})
export class AlbumDetailsComponent {
  constructor(@Inject('Chinook') private chinookService: Chinook,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.hideOverflow(true);
    this.getTracksByAlbumId();
  }

  private _tracksByAlbum: Observable<TracksByAlbum>;

  get tracksByAlbum(): Observable<TracksByAlbum> {
    return this._tracksByAlbum;
  }

  set tracksByAlbum(value: Observable<TracksByAlbum>) {
    this._tracksByAlbum = value;
  }

  getTracksByAlbumId() {
    this.tracksByAlbum =
      this.chinookService
        .tracksByAlbum(+this.activatedRoute.snapshot.params['albumId'])
        .first();
  }

  close() {
    this.hideOverflow(false);
    let parentData = this.activatedRoute.parent.snapshot.params['genreId'];
    this.router.navigate(parentData ? ['albums', parentData] : ['albums']);
  }

  hideOverflow(hide: boolean) {
    let elem = document.getElementsByClassName('index-body');
    (elem[0] as HTMLBodyElement).style.overflow = hide ? 'hidden' : 'auto';
  }
}
