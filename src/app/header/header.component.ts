import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet,RouterLinkActive } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  cart$: Observable<Product[]>;
  productCount$: Observable<number>;
  constructor(private store: Store<{ cart: Product[] }>) {
    this.cart$ = store.pipe(select('cart'));
    this.productCount$ = this.store.pipe(select(state => state.cart.length));
  }


}
