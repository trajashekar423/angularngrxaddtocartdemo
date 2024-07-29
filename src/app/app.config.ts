import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { HeroBannerReducer,HeroHomeBanner } from './store/home.reducer';
import { cartReducer } from './store/reducers/cart.reducer';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore(
    {hero:HeroBannerReducer,
    MyBanner:HeroHomeBanner,
     cart: cartReducer}
  ), provideEffects(), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
