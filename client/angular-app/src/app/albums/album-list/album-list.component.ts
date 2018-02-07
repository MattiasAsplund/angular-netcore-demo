import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {Chinook} from '../../shared/interfaces/chinook';
import {Album} from '../../shared/models/album';
import {fadeInAnimation} from '../../shared/animations/fade-in.animation';

@Component({
  selector: 'album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]': ''}
})
export class AlbumListComponent implements OnInit, OnDestroy {

  public albums: Observable<Album[]>;
  private subscription: Subscription;

  constructor(@Inject('Chinook') private chinookService: Chinook,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.subscribeToRouteChanged();
  }

  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }

  private subscribeToRouteChanged() {
    this.subscription = this.route.paramMap.subscribe(x => {
      let id = this.getIdFromRoute(x.get('genreId'));
      if (id < 0) return;
      this.albums = this.chinookService.albumsByGenre(id);
    });
  }

  private getIdFromRoute(param: any): number {
    return param === 0 || param === 'all' || !param ? 0 : +param;
  }
}
