import {Directive, OnDestroy, OnInit} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {Subscription} from 'rxjs/Subscription';
import {BreakpointObserver} from '@angular/cdk/layout';
import {MediaQueryHelper} from '../services/media-query.helper';

@Directive({
  selector: '[sidenavResponsive]'
})
export class SidenavResponsiveDirective implements OnInit, OnDestroy {

  private subscription: Subscription;

  constructor(private sidenav: MatSidenav,
              private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit(): void {
    if (this.breakpointObserver.isMatched(MediaQueryBreakpoint.isMobile)) this.onMobile();
    else this.onDefault();

    this.subscribeToBreakpoint();
    this.sidenav.fixedTopGap = 56;
  }

  subscribeToBreakpoint() {
    this.subscription = this.breakpointObserver.observe(MediaQueryBreakpoint.isMobile)
      .subscribe(x => {
        MediaQueryHelper.isMobile = x.matches;
        return x.matches && this.sidenav
          ? this.onMobile()
          : this.onDefault();
      });
  }

  onMobile(): void {
    this.sidenav.close();
    this.sidenav.fixedInViewport = true;
    this.sidenav.mode = 'over';
  }

  onDefault(): void {
    this.sidenav.fixedInViewport = false;
    this.sidenav.mode = 'side';
    this.sidenav.open();
  }

  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }
}

export const MediaQueryBreakpoint = {
  isMobile: '(max-width: 600px)'
};
