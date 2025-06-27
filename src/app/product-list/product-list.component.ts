import { Component } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { ProductItemType } from '../models/product.model';
import { ApiService } from '../api.service';
import { environment } from '../../env';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  providers: [CategoriesService]
})
export class ProductListComponent {
  public products: ProductItemType[] = [];
  IMAGE_URL = environment.IMAGE_URL

  constructor(private api: ApiService) { }
  ngOnInit(): void {
    this.api.getCollection('products').subscribe(data => {
      this.products = data;
    });

  }
}
