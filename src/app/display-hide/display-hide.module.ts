import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayHideRoutingModule } from './display-hide-routing.module';
import { DisplayPageComponent } from './pages/display-page/display-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';




@NgModule({
  declarations: [
    DisplayPageComponent,
    MainPageComponent

  ],
  imports: [
    CommonModule,
    DisplayHideRoutingModule,

  ]
})
export class DisplayHideModule { }
