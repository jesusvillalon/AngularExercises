import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';

import { ExternalLibraryRoutingModule } from './external-library-routing.module';
import { GraphicsPageComponent } from './pages/graphics-page/graphics-page.component';
import { GraphicOneComponent } from './components/graphic-one/graphic-one.component';
import { GraphicTwoComponent } from './components/graphic-two/graphic-two.component';


@NgModule({
  declarations: [
    GraphicsPageComponent,
    GraphicOneComponent,
    GraphicTwoComponent
  ],
  imports: [
    CommonModule,
    ExternalLibraryRoutingModule,
    ChartModule
  ]
})
export class ExternalLibraryModule { }
