import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoListRoutingModule } from './to-do-list-routing.module';
import { TodoListPageComponent } from './pages/todo-list-page/todo-list-page.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodoListPageComponent,
    SearchInputComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ToDoListRoutingModule,
    FormsModule
  ],

})
export class ToDoListModule { }
