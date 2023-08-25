import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListPageComponent } from './pages/todo-list-page/todo-list-page.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {path: 'toDoPage',
  component: TodoListPageComponent,
  children: [
    {path: 'searchInput', component: SearchInputComponent},
    {path: 'list', component: ListComponent},
    {path: '**', redirectTo: 'searchInput'}
  ]
},
  {path: '**', redirectTo: 'toDoList'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoListRoutingModule { }
