import {Routes} from '@angular/router';

export const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'albums'},
  {path: 'albums', loadChildren: './albums/albums.module#AlbumsModule'}
];
