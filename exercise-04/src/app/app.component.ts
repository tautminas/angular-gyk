import { Component } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [TaskComponent],
})
export class AppComponent {}
