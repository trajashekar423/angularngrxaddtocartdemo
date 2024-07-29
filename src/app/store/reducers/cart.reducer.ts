// src/app/store/reducers/cart.reducer.ts
import { Action, createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart } from '../actions/cart.actions';
import { Product } from '../../models/product.model';

export const initialState: Product[] = [];

const _cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { product }) => [...state, product]),
  on(removeFromCart, (state, { productId }) => state.filter(product => product.id !== productId))
);

export function cartReducer(state: Product[] | undefined, action: Action) {
  return _cartReducer(state, action);
}