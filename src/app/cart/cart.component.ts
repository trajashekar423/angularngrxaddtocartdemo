import { Component } from '@angular/core';
import { Store,select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';
import { removeFromCart } from '../store/actions/cart.actions';
import { map } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cart$: Observable<Product[]>;
  productCount$: Observable<number>;
  totalPrice$: Observable<number> | undefined;
  constructor(private store: Store<{ cart: Product[] }>) {
    this.cart$ = store.pipe(select('cart'));
    this.productCount$ = this.store.pipe(select(state => state.cart?.length ?? 0));
    
  }

  updateQuantity(productId: number, quantity: number) {
    this.store.dispatch(updateProductQuantity({ productId, quantity }));
    this.store.dispatch(calculateTotalPrice());
  }

  onRemoveFromCart(productId: number) {
    this.store.dispatch(removeFromCart({ productId }));
  }


  
}
function updateProductQuantity(arg0: { productId: number; quantity: number; }): any {
  throw new Error('Function not implemented.');
}

function calculateTotalPrice(): any {
  throw new Error('Function not implemented.');
}

