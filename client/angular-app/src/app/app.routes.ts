import {Routes} from '@angular/router';
import {AlbumsComponent} from './albums/albums.component';
import {AlbumDetailsComponent} from './albums/album-details/album-details.component';

export const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'albums'},
  {
    path: 'albums', component: AlbumsComponent,
    children: [{path: 'details/:albumid', component: AlbumDetailsComponent}]
  }
];
