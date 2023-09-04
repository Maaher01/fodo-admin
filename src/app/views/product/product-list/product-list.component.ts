import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import Swal from 'sweetalert2';
// import { Product } from 'src/app/models/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productData: any;
  products!: any;
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

  confirmBox(id: any) {
    Swal.fire({
      title: 'Are you sure want to delete this product?',
      text: 'You will not be able to recover it!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Deleted!', 'The product has been deleted.', 'success');
        this.productService.deleteProductById(id).subscribe((result) => {
          this.getAllProducts();
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your entry is safe :)', 'error');
      }
    });
  }
}
