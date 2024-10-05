import { provideRouter, Routes } from '@angular/router';

export const taskListRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./task-list.component'),
    children: [
      {
        path: 'home',
        title: 'Home',
        loadComponent: () => import('./pages/home/home.component'),
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
];


export default provideRouter(taskListRoutes);
