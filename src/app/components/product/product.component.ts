import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Product } from 'src/app/models/Product';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  protected route: ActivatedRoute = inject(ActivatedRoute);
  protected product$: Observable<Product> = inject(
    ProductServiceService
  ).getProductById(this.route.snapshot.params['id']);

  protected getProductRating(rating: number) {
    return (rating * 100) / 5;
  }
}
