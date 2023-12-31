import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Product } from '../models/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = environment.BASE_URL + 'product/';

  constructor(private http: HttpClient) {}

  addProduct(addPayload: any) {
    return this.http.post<any>(this.apiUrl + 'add-single-product', addPayload);
  }

  getAllProducts(): Observable<Product[]> {
    let params = new HttpParams();
    return this.http.post<any>(this.apiUrl + 'get-all-products', { params });
  }

  editProductById(id: any, editPayload: any) {
    return this.http.put(this.apiUrl + `edit-product-by-id/${id}`, editPayload);
  }

  deleteProductById(id: any) {
    return this.http.delete(this.apiUrl + `delete-product-by-id/${id}`);
  }
}
