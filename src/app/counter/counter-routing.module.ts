import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';

const routes: Routes = [
  { path: 'counterPage', component: CounterPageComponent },
  { path: '**', redirectTo: 'counterPage' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CounterRoutingModule {}
