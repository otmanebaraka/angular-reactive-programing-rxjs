import { ResolveFn } from '@angular/router';
import { Product } from '../types';
import { BackendApiService } from '../services/backend-api.service';
import { inject } from '@angular/core';
import { of } from 'rxjs';

export const productResolver: ResolveFn<Product | null> = (route) => {
  const id = route.paramMap.get('id');
  if (!id) return of(null);
  return inject(BackendApiService).getProduct(+id);
};
