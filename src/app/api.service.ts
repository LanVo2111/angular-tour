// src/app/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductItemType } from './models/product.model';

declare var $: any; // hoặc declare var jQuery: any;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:5000/api'; // địa chỉ backend server

  constructor(private http: HttpClient) { }

  ngAfterViewInit() {
    $('.slider').slick(); // ví dụ dùng Slick
  }

  // Gọi bất kỳ collection nào từ MongoDB (VD: images, users, products...)
  getCollection(collectionName: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${collectionName}`);
  }
  getById(collectionName: string, id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${collectionName}/${id}`);
  }
  getRelatedProducts(collection: string, productId: string): Observable<ProductItemType[]> {
    return this.http.get<ProductItemType[]>(`${this.baseUrl}/${collection}/${productId}/related`);
  }


}
