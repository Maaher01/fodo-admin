import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

const materials = [MatFormFieldModule, MatSelectModule, MatCardModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, materials],
  exports: [materials],
})
export class MaterialModule {}
