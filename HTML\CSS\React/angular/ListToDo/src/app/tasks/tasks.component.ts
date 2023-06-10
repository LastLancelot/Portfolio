import { Component } from '@angular/core';
import { Task } from 'src/interfaces/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  title = "To do list"
  selectedTaskProp !:Task;
  taskList:Task[]=[
  {
    description:'to do',
    done:true
  },
  {
    description:'eat',
    done:true
  },
  {
    description:'sleep',
    done:false
  },
  {
    description:'Walk',
    done:false
  },
]
  addNewTask(description:string):void{
    this.taskList.push({description, done:false});
  }
  selectedTask(task:Task):void{
    this.selectedTaskProp = task;
  }
}
