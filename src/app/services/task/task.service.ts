import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks = [
    {
      date: '12-03-2024',
      title: 'Task in Progress',
      description: 'This is a task that I',
      icon: '🍕',
      status: 'created'
    },
    {
      date: '12-03-2024',
      title: 'Task Completed',
      description: 'This is a task that I',
      icon: '🍕',
      status: 'completed'
    },
    {
      date: '12-03-2024',
      title: 'Task Won’t Do',
      description: 'This is a task that I',
      icon: '🍕',
      status: 'won'
    },
    {
      date: '12-03-2024',
      title: 'Task in Progress',
      description: 'This is a task that I',
      icon: '🍕',
      status: 'progress'
    },
  ]

  constructor() { }
}
