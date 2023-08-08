import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LightSwitchComponent } from './components/light-switch/light-switch.component';
import { TraficLightComponent } from './components/trafic-light/trafic-light.component';
import { ControllerComponent } from './components/controller/controller.component';

const routes: Routes = [
  {path: 'lightSwitch',
  component: LightSwitchComponent,
  children: [
    {path: 'traficLight', component: TraficLightComponent},
    {path: 'controller', component: ControllerComponent},
    {path: '**', redirectTo: 'traficLight'}
  ]
  },
  {path: '**', redirectTo: "lightSwitch"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LightSwitchRoutingModule { }
