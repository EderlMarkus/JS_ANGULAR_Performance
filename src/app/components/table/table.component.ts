import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, inject } from '@angular/core';
import { CommonModule, NgFor, AsyncPipe } from '@angular/common';
import { Product } from 'src/app/models/Product';
import { CdkTableModule } from '@angular/cdk/table';
import { MatButtonModule } from '@angular/material/button';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    AsyncPipe,
    CdkTableModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  products$: Observable<any> = inject(ProductServiceService).getProducts();
  displayedColumns: string[] = [
    'brand',
    'title',
    'category',
    'thumbnail',
    'details',
  ];
  protected productsTrackBy(index: number, product: Product) {
    return product.id;
  }
}
