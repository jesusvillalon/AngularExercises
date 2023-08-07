import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardsComponent } from './components/cards/cards.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavbarComponent,
    CardsComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([])
  ],
  exports: [
    NavbarComponent,
    CardsComponent,

  ]
})
export class SharedModule { }
