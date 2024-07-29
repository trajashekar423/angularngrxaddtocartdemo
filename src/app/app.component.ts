import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { HeroBanner, HeroBannerReducer } from './store/home.reducer';
import { Observable } from 'rxjs';
import { ProductsComponent } from "./products/products.component";
import { CartComponent } from "./cart/cart.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductsComponent, CartComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrxcart';
  hero$?:Observable<HeroBanner[]>;
  constructor(private store:Store<{hero:HeroBanner[]}>){
    this.hero$ = store.select("hero")
  }
  
  
}
