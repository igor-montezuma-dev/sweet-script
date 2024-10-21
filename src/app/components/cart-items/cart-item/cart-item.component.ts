import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, MatButtonModule, MatIconModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  name = input.required<string>();
  unityPrice = input.required<number>();
  multipliedPrice = input.required<number>();
  quantity = input.required<number>();
}
