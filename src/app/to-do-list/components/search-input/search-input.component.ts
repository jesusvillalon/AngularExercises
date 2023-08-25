import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {
  public newTaskTitle: string = "";

constructor(private tasksService: TasksService){}

addTask(taskTitle: string){
  if(!taskTitle || taskTitle.trim() === ''){
    return;
  }
  const newTask = {
    id: 0,
    taskTitle: taskTitle,
    subTasks: [],
    completed: false,
    editing: false,
  };
  this.tasksService.addTasks(newTask);

  this.newTaskTitle = "";
}

}
