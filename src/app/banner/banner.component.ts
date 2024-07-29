import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HeroHomeBanner } from '../store/home.reducer';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  MyBanner$?:Observable<HeroHomeBanner[]>;
  constructor(private store:Store<{MyBanner:HeroHomeBanner[]}>){  
   this.MyBanner$ = store.select("MyBanner")
  }
}

