import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartItemComponent } from './cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CartItemComponent, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  cart: any[] = [];

  quantity!: number;
  total!: number;

  ngOnInit(): void {
    this.fetchCart();
  }

  public fetchCart(): void {
    this.quantity = 6,
      this.cart = [
        {
          id: 1,
          name: 'Waffle with Berries',
          unityPrice: 6.5,
          multipliedPrice: 6.5,
          quantity: 1,
        },
        {
          id: 2,
          name: 'Vanilla Bean Crème Brûlée',
          unityPrice: 7,
          multipliedPrice: 7,
          quantity: 1,
        },
        {
          id: 3,
          name: 'Macaron Mix Of Five',
          unityPrice: 8,
          multipliedPrice: 8,
          quantity: 1,
        },
        {
          id: 4,
          name: 'Classic Tiramisu',
          unityPrice: 5.5,
          multipliedPrice: 5.5,
          quantity: 1,
        },
        {
          id: 5,
          name: 'Pistachio Baklava',
          unityPrice: 34,
          multipliedPrice: 34,
          quantity: 1,
        },
        {
          id: 6,
          name: 'Lemon Meringue Pie',
          unityPrice: 5,
          multipliedPrice: 5,
          quantity: 1,
        },
      ],
      this.total =  this.cart.reduce((acc, item) => acc + item.multipliedPrice, 0);
      (this.cart = this.cart.map((item) => {
        return {
          ...item,
          multipliedPrice: item.unityPrice * item.quantity,
        };
      }));
  }
}
