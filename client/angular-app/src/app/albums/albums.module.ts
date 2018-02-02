import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlbumListComponent} from './album-list/album-list.component';
import {AlbumListFilterComponent} from './album-list-filter/album-list-filter.component';
import { AlbumsComponent } from './albums.component';
import {LayoutModule} from '../layout/layout.module';
import {MaterialModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MaterialModule
  ],
  declarations: [
    AlbumListComponent,
    AlbumListFilterComponent,
    AlbumsComponent
  ],
  exports: [
    AlbumListComponent,
    AlbumListFilterComponent,
    AlbumsComponent
  ]
})
export class AlbumsModule {
}
