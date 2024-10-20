import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { IProduct } from '../../models/product';
import { ProductItemComponent } from './../product-item/product-item.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductItemComponent, CommonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {

  products =  input.required<IProduct[]>();
}

