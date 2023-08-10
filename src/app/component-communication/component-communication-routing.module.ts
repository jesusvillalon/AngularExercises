import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildPageComponent } from './pages/child-page/child-page.component';
import { ParentPageComponent } from './pages/parent-page/parent-page.component';

const routes: Routes = [
  {path: "parent",
  component: ParentPageComponent,
  children: [
    {path: "child", component: ChildPageComponent},
  ]
  },
  {path: "**", redirectTo: "parent"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentCommunicationRoutingModule { }
