import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../types';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    AsyncPipe,
    NgFor,
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent {
  activatedRoute = inject(ActivatedRoute);
  product: Product = this.activatedRoute.snapshot.data['productData'];
}
