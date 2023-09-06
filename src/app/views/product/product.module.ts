import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { ProductAddComponent } from './product-add/product-add.component';
import { GridModule, CardModule } from '@coreui/angular';
import { MaterialModule } from '../../material/material.module';
import { FormModule } from '@coreui/angular';
import { ButtonModule } from '@coreui/angular';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '../../shared/shared.module';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  declarations: [ProductAddComponent, ProductListComponent, ProductEditComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GridModule,
    CardModule,
    MaterialModule,
    FormModule,
    ButtonModule,
    SharedModule,
  ],
})
export class ProductModule {}
