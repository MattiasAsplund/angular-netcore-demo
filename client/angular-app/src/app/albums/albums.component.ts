import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver, MediaMatcher} from '@angular/cdk/layout';
import {Subscription} from 'rxjs/Subscription';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnDestroy {
  @ViewChild('sidenav') sidenav: MatSidenav;

  private sub: Subscription;
  private _isMobile: boolean;

  get isMobile(): boolean {
    return this._isMobile;
  }

  set isMobile(value: boolean) {
    this._isMobile = value;
  }


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
              private breakpointObserver: BreakpointObserver) {
    this.sub = breakpointObserver.observe('(max-width: 600px)')
      .subscribe(x => {
        this.isMobile = x.matches;
        if (this.sidenav) {
          if (!this.isMobile)
            return this.sidenav.open();
          return this.sidenav.close();
        }
      });
  }

  ngOnDestroy(): void {
    if (this.sub)
      this.sub.unsubscribe();
  }

}
