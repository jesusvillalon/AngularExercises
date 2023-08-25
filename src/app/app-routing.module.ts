import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main',
  },
  {
    path: "displayHide",
    loadChildren: () => import('./display-hide/display-hide.module')
      .then(m => m.DisplayHideModule)
  },
  {
    path: "componentCommunication",
    loadChildren: () => import('./component-communication/component-communication.module')
      .then(m => m.ComponentCommunicationModule)
  },
  {
    path: "crud",
    loadChildren: () => import('./crud/crud.module')
      .then(m => m.CrudModule)
  },
  {
    path: "searchOnType",
    loadChildren: () => import('./search-on-type/search-on-type.module')
      .then(m => m.SearchOnTypeModule)
  },
  {
    path: "lightSwitch",
    loadChildren: () => import('./light-switch/light-switch.module')
      .then(m => m.LightSwitchModule)
  },
  {
    path: "externalLibrary",
    loadChildren: () => import('./external-library/external-library.module')
      .then(m => m.ExternalLibraryModule)
  },
  {
    path: "counter",
    loadChildren: () => import('./counter/counter.module')
      .then(m => m.CounterModule)
  },
  {
    path: 'todoList',
    loadChildren: () => import('./to-do-list/to-do-list.module')
      .then(m => m.ToDoListModule)
  },
  {
    path: "**",
    redirectTo: "main"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
