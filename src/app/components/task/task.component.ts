import { Component } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
 
  task: Task ={
  id: 1,
  title:'hola',   
  completed :false 
}

}
