import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';

import {MaterialModule} from './shared/shared.module';
import {RouterModule} from '@angular/router';
import {AlbumsModule} from './albums/albums.module';
import {appRoutes} from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
     RouterModule.forRoot(appRoutes),
    MaterialModule,
    AlbumsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
