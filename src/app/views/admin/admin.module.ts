import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { ToastrModule } from 'ngx-toastr';
import { GridModule, CardModule } from '@coreui/angular';
import { MaterialModule } from '../../material/material.module';
import { FormModule } from '@coreui/angular';
import { ButtonModule } from '@coreui/angular';
import { AdminListComponent } from './admin-list/admin-list.component';
import { SharedModule } from '../../shared/shared.module';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

@NgModule({
  declarations: [AdminAddComponent, AdminListComponent, AdminEditComponent, AdminProfileComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ToastrModule,
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
export class AdminModule {}
