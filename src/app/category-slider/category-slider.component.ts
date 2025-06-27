import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { environment } from '../../env';
import { CategoryItemType } from '../models/categories.model';

@Component({
  selector: 'app-category-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-slider.component.html',
  styleUrl: './category-slider.component.scss'
})
export class CategorySliderComponent {
  categories: CategoryItemType[] = [];
  IMAGE_URL = environment.IMAGE_URL
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    arrows: true
  };
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getCollection('category').subscribe(data => {
      this.categories = data;
    });
  }
}
