import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

onDrop(event: CdkDragDrop<any,any,any>) {
  moveItemInArray(this.taskList, event.previousIndex, event.currentIndex);
}


  constructor(private taskservices: TaskService, private router: Router){

  }

  taskList: any[]=[];
  ngOnInit(){
    this.taskservices.getTaskList().subscribe(tasks =>{
      this.taskList = tasks;
    });
  }

  taskDetails: any;
  taskName: any;
  selectedTask: any[] = [];
  selectTask(taskID: any){

  }

  addNewTask(){
    
  }

  editTaskName(taskId: number, isEdit: boolean, taskTitle?: string) {
    this.taskList.map(task=>{
      if(task.id === taskId && !isEdit){
        task.titleEdit = true;
      }else if(task.id === taskId && isEdit){
        task.title = taskTitle;
        task.titleEdit = false;
      }
    });
  }

  statusOptions!: any[];
  changeTaskStatus(taskID: number, status: boolean, key?: string) {
    this.taskList.map(task=>{
      if(task.id === taskID && status){
        // task[key] = true;
      }
    });
  }

  completeTask(tasks: any){

  }
  
  editTask(taskID: any){
    this.taskList.map(task=>{
      if(task.id===taskID){
        this.taskName = task.title;
        this.taskDetails = task.description;
        this.router.navigate(['/task-details'])
      }
    });
  }
  startTask(tasks: any){

  }
  holdTask(tasks: any){

  }
  deleteTask(tasks: any){

  }

}
