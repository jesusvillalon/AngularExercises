import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CounterPageComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    FormsModule
  ]
})
export class CounterModule { }
