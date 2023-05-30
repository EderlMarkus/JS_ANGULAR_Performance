import { DummyProducts } from './../data/Products';
import { Product } from './../models/Product';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  products$: Observable<Product[]> = of(DummyProducts);
}
