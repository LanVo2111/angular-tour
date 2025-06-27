import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.scss'
})
export class FeaturedComponent {
  featureList = [
    {
      id: 1,
      icon:'icon-1.svg',
      title: 'Best prices & offers',
      description: 'Orders $50 or more'
    },
    {
      id: 2,
      icon:'icon-2.svg',
      title: 'Free delivery',
      description: '24/7 amazing services'
    },
    {
      id: 3,
      icon:'icon-3.svg',
      title: 'Great daily deal',
      description: 'When you sign up'
    },
    {
      id: 4,
      icon:'icon-4.svg',
      title: 'Wide assortment',
      description: 'Mega Discounts'
    },
    {
      id: 5,
      icon:'icon-5.svg',
      title: 'Easy returns',
      description: 'Within 30 days'
    }
  ]
}
