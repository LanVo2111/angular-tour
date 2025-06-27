import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { CategorySliderComponent } from '../category-slider/category-slider.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { FeaturedComponent } from '../featured/featured.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [    
    BannerComponent,
    CategorySliderComponent,
    ProductListComponent,
    FeaturedComponent,
    FooterComponent,
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
