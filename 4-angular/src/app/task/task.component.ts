import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LocalizedDatePipe } from '../localized-date.pipe';
import { TaskManagerService } from '../task-manager.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe, LocalizedDatePipe, RouterModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  taskManagerService: TaskManagerService = inject(TaskManagerService);

  tasks = this.taskManagerService.getTasks();

  addTask(): void {
    this.taskManagerService.addTask();
    this.tasks = this.taskManagerService.getTasks();
  }
}
