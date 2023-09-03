import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productData: any;
  products: any;
  errorResponse: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((results) => {
      (this.productData = results), (this.products = this.productData.data);
    });
  }

  deleteProductById(id: any) {
    this.productService.deleteProductById(id).subscribe({
      next: () => {
        window.location.reload();
      },
      error: (err) => {
        this.errorResponse = err.message;
      },
    });
  }
}
