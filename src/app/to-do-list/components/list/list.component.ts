import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { SubTasks, Tasks } from '../../interfaces/tasks.interface';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public tasks: Tasks[] = [];
  public selectedTask: Tasks | null = null;
  public newSubtask: string = '';

  constructor(private tasksService: TasksService) {
    this.selectedTask = {
      id: 0,
      taskTitle: '',
      subTasks:[],
      completed: false,
      editing: true,
    };
  }
  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((tasks) => {
      this.tasks = tasks.map(task => ({
        ...task,
        editing: false,
        subTasks: task.subTasks || []  // Initialize subTasks array
      }));
      this.loadCompletedStatus();
    });
  }


  isCompleted(task: Tasks) {
    task.completed = !task.completed;
    this.saveCompleteStatus();
  }


  saveCompleteStatus() {
    const completedTasks = this.tasks
      .filter((task) => task.completed)
      .map((task) => task.id);
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
  }

  loadCompletedStatus() {
    const completedTasks = JSON.parse(
      localStorage.getItem('completedTasks') || '[]'
    ) as number[];
    this.tasks.forEach((task) => {
      task.completed = completedTasks.includes(task.id);
    });
  }

  removeCompletedStatus(id: number) {
    const completedTasks = JSON.parse(
      localStorage.getItem('completedTasks') || '[]'
    ) as number[];
    const updatedCompletedTasks = completedTasks.filter(taskId => taskId !== id);
    localStorage.setItem('completedTasks', JSON.stringify(updatedCompletedTasks));
  }


  editTask(task: Tasks){
    task.editing = !task.editing

    if(!task.editing) {
      this.tasksService.updateTask(task)
    }
  }

  deleteTaskBtn(id: number) {
    const taskToDelete = this.tasks.find(task => task.id === id)
    if(taskToDelete && taskToDelete.completed){
      this.removeCompletedStatus(id);
    }

    this.tasksService.deleteTasks(id);
  }

  addSubtask(task: Tasks) {
    if (!task.subTasks) {
      task.subTasks = [];
    }
    const newSubtask: SubTasks = {
      id: this.generateSubtaskId(),
      title: this.newSubtask,
      completed: false,
      editSubtask: false
    };
    task.subTasks.push(newSubtask);
    this.newSubtask = '';
    this.tasksService.updateTask(task)
  }



  generateSubtaskId(): number{
    return Math.floor(Math.random() * 1000)
  }


}
