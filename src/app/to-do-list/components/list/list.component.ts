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
  public subtasks: SubTasks[] = [];
  public selectedTask: Tasks | null = null;
  public newSubtask: string = '';
  public addingSubtask: boolean = true;
  public completedSubtasks: number[] = [];
  private subtaskCompletionStatusBackup: Record<number, boolean> = {};

  constructor(private tasksService: TasksService) {
    this.selectedTask = {
      id: 0,
      taskTitle: '',
      subTasks: [],
      completed: false,
      editing: true,
    };
  }
  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((tasks) => {
      this.tasks = tasks.map((task) => ({
        ...task,
        editing: false,
        subTasks: task.subTasks || [],
      }));
      this.loadCompletedStatus();
      this.loadSubtaskCompleteStatus();
    });
  }

  // Tasks
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
    const updatedCompletedTasks = completedTasks.filter(
      (taskId) => taskId !== id
    );
    localStorage.setItem(
      'completedTasks',
      JSON.stringify(updatedCompletedTasks)
    );
  }

  editTask(task: Tasks) {
    task.editing = !task.editing;

    if (!task.editing) {
      this.tasksService.updateTask(task);
    }
  }

  deleteTaskBtn(id: number) {
    const taskToDelete = this.tasks.find((task) => task.id === id);
    if (taskToDelete && taskToDelete.completed) {
      this.removeCompletedStatus(id);
    }

    this.tasksService.deleteTasks(id);
  }

  // SubTasks

  isAddingSubtask(task: Tasks) {
    if (!this.addingSubtask) {
      if (this.newSubtask.trim() !== '') {
        this.addSubtask(task);
      }
    }
    this.selectedTask = task;
    this.addingSubtask = !this.addingSubtask;
  }

  addSubtask(task: Tasks) {
    if (!task.subTasks) {
      task.subTasks = [];
    }
    const newSubtask: SubTasks = {
      id: this.generateSubtaskId(),
      title: this.newSubtask,
      completedSubtask: false,
      editSubtask: false,
    };
    task.subTasks.push(newSubtask);
    this.tasksService.updateTask(task);

    this.newSubtask = '';
    this.addingSubtask = false;
  }

  generateSubtaskId(): number {
    return Math.floor(Math.random() * 1000);
  }

  isSubtaskCompleted(subtask: SubTasks) {
    subtask.completedSubtask = !subtask.completedSubtask;
    this.saveSubtaskCompleteStatus();

    console.log(subtask.id, subtask.completedSubtask);
  }

  saveSubtaskCompleteStatus() {
    const completedSubtasks = this.tasks
      .flatMap(task => task.subTasks)
      .filter(subtask => subtask.completedSubtask)
      .map(subtask => subtask.id);
    localStorage.setItem('completedSubtasks', JSON.stringify(completedSubtasks));
  }

  loadSubtaskCompleteStatus() {
    const completedSubtasks = JSON.parse(
      localStorage.getItem('completedSubtasks') || '[]'
    ) as number[];
    this.tasks.forEach(task => {
      task.subTasks.forEach(subtask => {
        subtask.completedSubtask = completedSubtasks.includes(subtask.id);
      });
    });
  }


}
