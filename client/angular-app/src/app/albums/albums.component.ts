import {Component} from '@angular/core';
import {MediaQueryHelper} from '../shared/services/media-query.helper';

@Component({
  selector: 'albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent {
  get isMobile(): boolean {
    return MediaQueryHelper.isMobile;
  }
}

