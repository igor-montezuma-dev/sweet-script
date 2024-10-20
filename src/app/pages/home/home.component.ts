import { Component, OnInit } from '@angular/core';
import { ProductsListComponent } from '../../components/products-list/products-list.component';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent implements OnInit {
  productItems: IProduct[] = [];

  ngOnInit(): void {
    this.fetchProducts();
  }

  public fetchProducts(): void {
    this.productItems = [
      {
        id: 1,
        name: 'Waffle with Berries',
        price: 6.5,
        category: 'Waffle',
        image: 'assets/images/image-waffle-desktop.jpg',
      },
      {
        id: 2,
        name: 'Vanilla Bean Crème Brûlée',
        price: 7,
        category: 'Crème Brûlée',
        image: 'assets/images/image-creme-brulee-desktop.jpg',
      },
      {
        id: 3,
        name: 'Macaron Mix Of Five',
        price: 8,
        category: 'Macaron',
        image: 'assets/images/image-macaron-desktop.jpg',
      },
      {
        id: 4,
        name: 'Classic Tiramisu',
        price: 5.5,
        category: 'Tiramisu',
        image: 'assets/images/image-tiramisu-desktop.jpg',
      },
      {
        id: 5,
        name: 'Pistachio Baklava',
        price: 34,
        category: 'Baklava',
        image: 'assets/images/image-baklava-desktop.jpg',
      },
      {
        id: 6,
        name: 'Lemon Meringue Pie',
        price: 5,
        category: 'Pie',
        image: 'assets/images/image-meringue-desktop.jpg',
      },
      {
        id: 7,
        name: 'Red Velvet Cake',
        price: 4.5,
        category: 'Cake',
        image: 'assets/images/image-cake-desktop.jpg',
      },
      {
        id: 8,
        name: 'Salted Caramel Brownie',
        price: 4.5,
        category: 'Brownie',
        image: 'assets/images/image-brownie-desktop.jpg',
      },
      {
        id: 9,
        name: 'Vanilla Panna Cotta',
        price: 6.5,
        category: 'Panna Cotta',
        image: 'assets/images/image-panna-cotta-desktop.jpg',
      },
    ];
  }
}
