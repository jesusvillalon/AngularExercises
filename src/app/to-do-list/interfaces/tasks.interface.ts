export interface Tasks {
  id: number;
  taskTitle: string;
  subTasks: SubTasks[];
  completed: boolean;
  editing: boolean;

}

export interface SubTasks {
  id: number;
  title: string;
  completedSubtask: boolean;
  editSubtask: boolean;
}
