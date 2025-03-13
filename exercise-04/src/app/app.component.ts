import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  tasks: { id: number; name: string }[] = [];

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
    };

    this.tasks.push(newTask);
  }
}
