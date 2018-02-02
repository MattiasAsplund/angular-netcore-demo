import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {MatDrawer} from '@angular/material';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnDestroy {

  @Input('opened')
  set isOpen(value: boolean) {
    this._isOpen = value;
  }

  get isOpen(): boolean {
    return this._isOpen;
  }

  private _isOpen: boolean;
  private breakpointSubscription: Subscription;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.observeBreakpoint();
  }

  observeBreakpoint() {
    this.breakpointSubscription =
      this.breakpointObserver.observe('(max-width: 600px)')
        .subscribe(breakpoint => {
          return (this.isOpen = breakpoint.matches);
        });
  }

  ngOnDestroy(): void {
    if (this.breakpointSubscription) this.breakpointSubscription.unsubscribe();
  }
}
