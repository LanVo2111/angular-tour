import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductItemType } from '../models/product.model';
import { ApiService } from '../api.service';
import { environment } from '../../env';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  public productData: Partial<ProductItemType> = {};
  public relatedProducts: ProductItemType[] = []
  IMAGE_URL = environment.IMAGE_URL

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.apiService.getById('products', id!).subscribe(product => {
      this.productData = product;
    });
    this.apiService.getRelatedProducts('products', id!).subscribe(related => {
      this.relatedProducts = related;
    });
  }
}
