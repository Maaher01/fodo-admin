import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
  heading: string;
  errorResponse: any;

  editProductForm = this.fb.group({
    productName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    productSlug: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    price: new FormControl('', Validators.required),
    sku: new FormControl('', [
      Validators.minLength(6),
      Validators.maxLength(6),
    ]),
    discountAmount: new FormControl(''),
    brand: new FormControl('', Validators.minLength(3)),
  });

  ngOnInit(): void {
    this.editProductForm.patchValue({
      productName: this.data.product.productName,
      productSlug: this.data.product.productSlug,
      price: this.data.product.price,
      sku: this.data.product.sku,
      discountAmount: this.data.product.discountAmount,
      brand: this.data.product.brand,
    });
  }

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProductEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.heading = data.heading;
  }

  editProduct(id: any) {
    const payload = {
      productName: this.editProductForm.controls['productName'].value!,
      productSlug: this.editProductForm.controls['productSlug'].value!,
      price: this.editProductForm.controls['price'].value!,
      sku: this.editProductForm.controls['sku'].value!,
      discountAmount: this.editProductForm.controls['discountAmount'].value!,
      brand: this.editProductForm.controls['brand'].value!,
    };
    console.log(payload);

    this.productService.editProductById(id, payload).subscribe({
      next: () => {
        this.closeDialog();
        window.location.reload();
      },
      error: (err) => {
        this.errorResponse = err.message;
      },
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
