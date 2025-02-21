import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TaskComponent} from './components/task/task.component'

import { Task } from './interfaces/task.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [TaskComponent,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  task: Task[] = [{
    id: 0,
    title: 'Task 1',
    completed: false
  }, {
    id: 1,
    title: 'Task 2',
    completed: true
  } 
  ];
}
