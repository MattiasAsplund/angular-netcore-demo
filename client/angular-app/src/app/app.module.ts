import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {MaterialModule, SharedModule} from './shared/shared.module';
import {LayoutModule} from './layout/layout.module';
import {RouterModule} from '@angular/router';
import {AlbumsModule} from './albums/albums.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    LayoutModule,
    RouterModule,
    MaterialModule,
    AlbumsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
