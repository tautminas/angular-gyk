import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LocalizedDatePipe } from '../localized-date.pipe';

@Component({
  selector: 'app-task',
  imports: [DatePipe, LocalizedDatePipe],
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
      'Prepare dinner',
      'Go for a jog',
      'Organize the closet',
      'Meditate for 10 minutes',
      'Update LinkedIn profile',
      'Plan a trip',
      'Work on a personal project',
      'Attend a webinar',
      'Watch a documentary',
      'Practice coding challenges',
      'Clean the kitchen',
      'Call a family member',
      'Plan the week ahead',
      'Complete a puzzle',
      'Watch a TED talk',
      'Attend a fitness class',
    ];

    const newTask = {
      id: this.tasks.length + 1,
      name: randomTasks[Math.floor(Math.random() * randomTasks.length)],
      date: new Date(),
    };

    this.tasks.push(newTask);
  }
}
