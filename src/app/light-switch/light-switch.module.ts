import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LightSwitchRoutingModule } from './light-switch-routing.module';
import { LightSwitchComponent } from './components/light-switch/light-switch.component';
import { TraficLightComponent } from './components/trafic-light/trafic-light.component';
import { ControllerComponent } from './components/controller/controller.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LightSwitchComponent,
    TraficLightComponent,
    ControllerComponent
  ],
  imports: [
    CommonModule,
    LightSwitchRoutingModule,
    FormsModule
  ]
})
export class LightSwitchModule { }
