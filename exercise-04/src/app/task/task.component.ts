import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  tasks: { id: number; name: string; date: Date }[] = [];

  addTask() {
    const randomTasks = [
      'Buy groceries',
      'Walk the dog',
      'Read a book',
      'Work out',
      'Call a friend',
      'Learn Angular',
      'Write a blog post',
      'Clean the house',
    ];

    const newTask = {
      id: this.tasks.length + 1,
      name: randomTasks[Math.floor(Math.random() * randomTasks.length)],
      date: new Date(),
    };

    this.tasks.push(newTask);
  }
}
