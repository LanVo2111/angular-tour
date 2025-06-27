import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BACKEND_URL } from '../constant';
import { ProductItemType } from '../models/product.model';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) { }

  getAllProduct(): Observable<ProductItemType[]> {
    return this.httpClient.get<ProductItemType[]>(BACKEND_URL + 'products').pipe();
  }
}
