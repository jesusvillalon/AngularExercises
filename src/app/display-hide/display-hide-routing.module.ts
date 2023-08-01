import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DisplayPageComponent } from './pages/display-page/display-page.component';

const routes: Routes = [{
  path: "",
  component: MainPageComponent,
  children: [
    {path: "display", component: DisplayPageComponent},
    {path: "**", redirectTo: "display"},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisplayHideRoutingModule { }
