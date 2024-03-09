import { Routes } from '@angular/router';
import { productResolver } from './resolvers/product.resolver';

export const routes: Routes = [
  {
    path: 'product-list',
    loadComponent: () => import('./components/product-list/product-list.component').then((m) => m.ProductListComponent)
  },
  {
    path: 'product-details/:id',
    loadComponent: () => import('./components/product-details/product-details.component').then((m) => m.ProductDetailsComponent),
    resolve: {
      productData: productResolver
    }
  }
];
