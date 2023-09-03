import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Product',
    },
    children: [
      {
        path: 'addProduct',
        component: ProductAddComponent,
        data: {
          title: 'Add Product',
        },
      },
      {
        path: 'productList',
        component: ProductListComponent,
        data: {
          title: 'Product List',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
