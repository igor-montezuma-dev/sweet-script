import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CurrencyPipe, ButtonComponent],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {

  productImage =  input.required<string>();
  productName =  input.required<string>();
  productPrice =  input.required<number>();
  productCategory =  input.required<string>();
}
