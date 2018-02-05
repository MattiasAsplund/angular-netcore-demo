import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {Chinook} from '../../shared/interfaces/chinook';
import {Album} from '../../shared/models/album';
import {animate, group, query, style, transition, trigger} from '@angular/animations';
import {fadeInAnimation} from '../../shared/animations/fade-in.animation';

@Component({
  selector: 'album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]': ''}
})
export class AlbumListComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  public albums: Observable<Album[]>;

  constructor(@Inject('Chinook') private chinookService: Chinook,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.subscribeToRouteChanged();
  }

  private subscribeToRouteChanged() {
    this.subscription = this.route.queryParamMap.subscribe(x => {
      let id = this.getIdFromSlug(x.get('g'));
      if (id < 0) return;
      this.albums = this.chinookService.albumsByGenre(id);
    });
  }

  private getIdFromSlug(param: string): number {
    if(param === 'all') return 0;
    if (!param) return -1;
    return +param.substr(0, param.indexOf('-'));
  }

  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }
}
