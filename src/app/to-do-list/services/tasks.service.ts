import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SubTasks, Tasks } from '../interfaces/tasks.interface';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks: BehaviorSubject<Tasks[]> = new BehaviorSubject<Tasks[]>([]);

  private generateId(): number {
    return Math.floor(Math.random() * 1000)
  }


  constructor() {
    const storedTasks = localStorage.getItem('tasks');
    if(storedTasks) {
      this.tasks.next(JSON.parse(storedTasks));
    }
  }

  getTasks(): Observable<Tasks[]> {
    return this.tasks.asObservable();
  }

  updateLocalStorage(tasks: Tasks[]) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  addTasks(tasks: Tasks) {
    const currentTasks = this.tasks.value;
    tasks.id = this.generateId();
    const updatedTasks = [...currentTasks, tasks];
    this.tasks.next(updatedTasks);
    this.updateLocalStorage(updatedTasks);
  }

  updateTask(updatedTask: Tasks): void {
    const currentTasks = this.tasks.value;
    const updatedTasks = currentTasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );
    this.tasks.next(updatedTasks);
    this.updateLocalStorage(updatedTasks);
    this.saveTaskCompleteStatus();
  }

  deleteTasks(taskId: number) {
    const currentTasks = this.tasks.value;
    const updatedTasks = currentTasks.filter(task =>
      task.id !== taskId);
    this.tasks.next(updatedTasks);
    this.updateLocalStorage(updatedTasks)
    this.removeTaskCompleteStatus(taskId)
  }

  private saveTaskCompleteStatus() {
    const completedTasks = this.tasks.value
      .filter(task => task.completed)
      .map(task => task.id);
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
  }

  private removeTaskCompleteStatus(id: number) {
    const completedTasks = JSON.parse(
      localStorage.getItem('completedTasks') || '[]'
    ) as number[];
    const updatedCompletedTasks = completedTasks.filter(taskId => taskId !== id);
    localStorage.setItem('completedTasks', JSON.stringify(updatedCompletedTasks));
  }

}
