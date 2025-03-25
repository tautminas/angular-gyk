import { Component, inject, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LocalizedDatePipe } from '../localized-date.pipe';
import { TaskManagerService } from '../task-manager.service';

@Component({
  selector: 'app-task',
  imports: [DatePipe, LocalizedDatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  taskManagerService: TaskManagerService = inject(TaskManagerService);

  tasks = this.taskManagerService.getTasks();
  addTask(): void {
    this.taskManagerService.addTask();
    this.tasks = this.taskManagerService.getTasks();
    console.log(this.taskManagerService.getTaskById(this.tasks.length));
  }
}
