import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TablePageComponent } from './pages/table-page/table-page.component';



@NgModule({
  declarations: [
    RegisterPageComponent,
    TablePageComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
