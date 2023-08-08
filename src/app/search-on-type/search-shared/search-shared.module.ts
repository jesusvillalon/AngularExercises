import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchboxComponent } from './searchbox/searchbox.component';



@NgModule({
  declarations: [
    SearchboxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchboxComponent
  ]
})
export class SearchSharedModule { }
