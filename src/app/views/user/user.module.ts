import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserAddComponent } from './user-add/user-add.component';
import { GridModule, CardModule } from '@coreui/angular';
import { MaterialModule } from '../../material/material.module';
import { FormModule } from '@coreui/angular';
import { ButtonModule } from '@coreui/angular';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../../shared/shared.module';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  declarations: [UserAddComponent, UserListComponent, UserEditComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
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
export class UserModule {}
