import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlbumListComponent} from './album-list/album-list.component';
import {AlbumListFilterComponent} from './album-list-filter/album-list-filter.component';
import {AlbumsComponent} from './albums.component';
import {MaterialModule} from '../shared/shared.module';
import {SidenavResponsiveDirective} from '../shared/directives/sidenav-responsive.directive';
import {AlbumDetailsComponent} from './album-details/album-details.component';
import {RouterModule} from '@angular/router';
import {AlbumDetailsTracksComponent} from './album-details-tracks/album-details-tracks.component';
import {TimeFormatPipe} from './shared/pipes/time-format.pipe';
import {PropEmptyPlaceholderPipe} from './shared/pipes/prop-empty-placeholder.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {albumsRoutes} from './albums.routes';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule.forChild(albumsRoutes)

  ],
  declarations: [
    AlbumListComponent,
    AlbumListFilterComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    SidenavResponsiveDirective,
    AlbumDetailsTracksComponent,
    TimeFormatPipe,
    PropEmptyPlaceholderPipe,
  ],
  exports: [
    AlbumsComponent
  ]
})
export class AlbumsModule {
}
