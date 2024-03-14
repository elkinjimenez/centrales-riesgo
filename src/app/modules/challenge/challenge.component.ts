import { Component } from '@angular/core';
import { TaskService } from '../../services/task/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-challenge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './challenge.component.html',
  styleUrl: './challenge.component.css'
})
export class ChallengeComponent {

  constructor(
    public tasks: TaskService,
  ) {

  }

}
