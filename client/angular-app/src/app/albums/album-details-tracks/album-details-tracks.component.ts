import {Component, Input} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
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
  @Input('datasource')
  set dataSource(value: MatTableDataSource<Track>) {
    this._dataSource = value;
  }

  get dataSource(): MatTableDataSource<Track> {
    return this._dataSource;
  }

  private _dataSource = new MatTableDataSource<Track>();
  public displayedColumns = ['trackId', 'trackName', 'artistName', 'composer', 'milliseconds'];
}
