import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ChinookService} from '../shared/services/chinook.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    {provide: 'Chinook', useClass: ChinookService}
  ],
  exports: [
    HttpClientModule
  ]
})
export class CoreModule {
}

