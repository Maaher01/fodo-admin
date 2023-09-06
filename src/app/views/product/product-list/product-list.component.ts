import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import Swal from 'sweetalert2';
// import { Product } from 'src/app/models/product.interface';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productData: any;
  products!: any;
  errorResponse: any;
  @Input() product!: any;

  constructor(
    private productService: ProductService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((results) => {
      (this.productData = results), (this.products = this.productData.data);
    });
  }

  openEditDialog(product: any) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      heading: 'Edit Product',
      product: product,
    };

    this.dialog.open(ProductEditComponent, dialogConfig);
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
