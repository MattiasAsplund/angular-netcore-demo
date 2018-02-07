import {Routes} from '@angular/router';
import {AlbumsComponent} from './albums.component';
import {AlbumDetailsComponent} from './album-details/album-details.component';

export const albumsRoutes: Routes = [
  {
    path: ':genreId', component: AlbumsComponent,
    children: [{path: 'details/:albumId', component: AlbumDetailsComponent}]
  }
];
