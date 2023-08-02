import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { TablePageComponent } from './pages/table-page/table-page.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {path:"register", component: RegisterPageComponent,
      children:[
        {path: "tablePage", component: TablePageComponent}
      ]},
      {path:"**", redirectTo: "register"},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
