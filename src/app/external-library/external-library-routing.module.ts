import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GraphicOneComponent } from './components/graphic-one/graphic-one.component';
import { GraphicTwoComponent } from './components/graphic-two/graphic-two.component';
import { GraphicsPageComponent } from './pages/graphics-page/graphics-page.component';

const routes: Routes = [
  {path: 'graphics-page',
   component: GraphicsPageComponent,
   children: [
    {path: 'graphic-one', component: GraphicOneComponent},
    {path: 'graphic-two', component: GraphicTwoComponent},
    {path: '**', redirectTo: 'graphic-one'}
   ]
  },

  {path: '**', redirectTo: 'graphics-page'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExternalLibraryRoutingModule { }
