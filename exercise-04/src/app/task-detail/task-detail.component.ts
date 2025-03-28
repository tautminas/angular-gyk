import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskManagerService } from '../task-manager.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss',
})
export class TaskDetailComponent {
  private route = inject(ActivatedRoute);
  private taskManagerService = inject(TaskManagerService);

  taskId: number | null = Number(this.route.snapshot.paramMap.get('id'));
  task = this.taskId ? this.taskManagerService.getTaskById(this.taskId) : null;
}
