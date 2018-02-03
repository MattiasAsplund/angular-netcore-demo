import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ChinookService} from '../shared/services/chinook.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    {provide: 'Chinook', useClass: ChinookService}
  ],
  exports: [
    HttpClientModule
  ]
})
export class CoreModule {
}

