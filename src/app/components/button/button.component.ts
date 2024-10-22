import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  addedToCart = false;
  count = 1;

  addToCart() {
    this.addedToCart = true;
  }

  decrement() {
    if (this.count === 1) {
      this.addedToCart = false;
    } else {
      this.count--;
    }
  }

  increment() {
    this.count++;
  }
}
