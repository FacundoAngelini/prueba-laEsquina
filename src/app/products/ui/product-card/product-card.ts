import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../data-access/product';

@Component({
  imports: [RouterLink],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  public readonly product = input.required<Product>();
  public readonly productDeleted = output<string | number>();
}