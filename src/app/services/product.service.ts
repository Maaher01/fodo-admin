import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = environment.BASE_URL + 'product/';

  constructor(private http: HttpClient) {}

  addProduct(addPayload: any) {
    return this.http.post<any>(this.apiUrl + 'add-single-product', addPayload);
  }

  getAllProducts() {
    let params = new HttpParams();
    return this.http.post<any>(this.apiUrl + 'get-all-products', { params });
  }

  deleteProductById(id: any) {
    return this.http.delete(this.apiUrl + `delete-product-by-id/${id}`);
  }
}
