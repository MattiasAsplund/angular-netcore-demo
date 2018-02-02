import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MaterialModule} from '../shared/shared.module';
import { LayoutContainerComponent } from './layout-container/layout-container.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    SidenavComponent,
    LayoutContainerComponent
  ],
  exports:[
    SidenavComponent,
    LayoutContainerComponent
  ]
})
export class LayoutModule { }
