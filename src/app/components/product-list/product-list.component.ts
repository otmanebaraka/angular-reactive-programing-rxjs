import { Component, inject } from '@angular/core';
import { BackendApiService } from '../../services/backend-api.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  backendApiService = inject(BackendApiService);

  products$ = this.backendApiService.getProducts().pipe(
    map((response) => response.products)
  );
}
