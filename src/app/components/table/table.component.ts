import { ProductServiceService } from './../../services/product-service.service';
import { Component, inject } from '@angular/core';
import { CommonModule, NgFor, AsyncPipe } from '@angular/common';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, ProductComponent, NgFor, AsyncPipe],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  protected productService = inject(ProductServiceService);
}
