import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'task-list',
    title: 'TaskList',
    loadChildren: () => import('./task-list/task-list.routes').then(routes => routes.taskListRoutes),
  },
  {
    path: '**',
    redirectTo: 'task-list'
  }
];
