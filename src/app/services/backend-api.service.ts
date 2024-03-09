import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Product, ProductResponse } from '../types';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  httpClient = inject(HttpClient);

  apiUrl = environment.apiUrl;

  getProducts() {
    return this.httpClient.get<ProductResponse>(`${this.apiUrl}/products`);
  }

  getProduct(id: number) {
    return this.httpClient.get<Product>(`${this.apiUrl}/products/${id}`);
  }
}
