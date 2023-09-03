import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent {
  responseData: any;
  errorMessage: any;

  productAddForm = this.fb.group({
    productName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    productSlug: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    price: new FormControl('', Validators.required),
  });

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {}

  addProduct() {
    this.productService.addProduct(this.productAddForm.value).subscribe(
      (result) => {
        this.responseData = result;
        this.productAddForm.reset();
        this.errorMessage = null;
        this.router.navigate(['/product/productList']);
      },
      (err) => {
        this.errorMessage = err.error.message;
      }
    );
  }
}
