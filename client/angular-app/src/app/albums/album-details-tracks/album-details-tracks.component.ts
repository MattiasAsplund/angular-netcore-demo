import {Component, Input} from '@angular/core';
import {Track} from '../../shared/models/track';
import {fadeInAnimation} from '../../shared/animations/fade-in.animation';

@Component({
  selector: 'album-details-tracks',
  templateUrl: './album-details-tracks.component.html',
  styleUrls: ['./album-details-tracks.component.scss'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]': ''}

})
export class AlbumDetailsTracksComponent {
  public displayedColumns = ['No', 'Track', 'Artist', 'Composer', 'Length'];
  private _tracksByAlbum: Track[];

  get tracks(): Track[] {
    return this._tracksByAlbum;
  }

  @Input('tracks')
  set tracks(value: Track[]) {
    if (!value) return;
    this._tracksByAlbum = value;
  }
}
