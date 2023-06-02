import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const tableChildRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./table.component').then((c) => c.TableComponent),
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('../product/product.component').then((c) => c.ProductComponent),
  },
];

@NgModule({
  imports: [RouterModule.forChild(tableChildRoutes)],
  exports: [RouterModule],
})
export class tableChildRoutesModule {}
