import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    loadComponent: () =>
      import('../components/about/about.component').then(
        (c) => c.AboutComponent
      ),
  },
  {
    path: 'table',
    loadChildren: () =>
      import('./table.routes').then((c) => c.tableChildRoutesModule),
  },
  {
    path: 'add',
    loadComponent: () =>
      import('../components/add/add.component').then((c) => c.AddComponent),
  },
  {
    path: 'datepicker',
    loadComponent: () =>
      import('../components/datepicker/datepicker.component').then(
        (c) => c.DatepickerComponent
      ),
  },
];
