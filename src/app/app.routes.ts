import { Routes } from '@angular/router';
import { ChallengeComponent } from './modules/challenge/challenge.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'challenge',
    pathMatch: 'full'
  },
  {
    path: 'challenge',
    component: ChallengeComponent,
  }
];
