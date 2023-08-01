import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentCommunicationRoutingModule } from './component-communication-routing.module';
import { ChildPageComponent } from './pages/child-page/child-page.component';
import { ParentPageComponent } from './pages/parent-page/parent-page.component';


@NgModule({
  declarations: [
    ParentPageComponent,
    ChildPageComponent
  ],
  imports: [
    CommonModule,
    ComponentCommunicationRoutingModule
  ]
})
export class ComponentCommunicationModule { }
