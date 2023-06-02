import { HttpClient } from '@angular/common/http';
import { Product } from './../models/Product';
import { Observable, map } from 'rxjs';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  http: HttpClient = inject(HttpClient);
  apiUrl: string = 'https://dummyjson.com/products';
  products$: Observable<Product[]> = this.http.get<Product[]>(this.apiUrl);

  public getProducts() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  public getProductById(id: number) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}
