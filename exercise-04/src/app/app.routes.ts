import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'tasks',
    component: TaskComponent,
  },
  // { path: 'tasks/:id', component: TaskpageComponent },
];
