import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';

import {MaterialModule} from './shared/shared.module';
import {RouterModule} from '@angular/router';
import {AlbumsModule} from './albums/albums.module';
import {appRoutes} from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
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
