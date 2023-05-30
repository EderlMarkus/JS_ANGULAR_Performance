import { Table } from './../../../../accountingapi/accountingapi-ui/accountingapi-ui-web/src/app/gen/model/table';
import { Routes } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { HomeComponent } from '../components/home/home.component';
import { TableComponent } from '../components/table/table.component';
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
    loadComponent: () =>
      import('../components/table/table.component').then(
        (c) => c.TableComponent
      ),
  },
];
