import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.scss'],
})
export class AdminEditComponent implements OnInit {
  heading: string;
  errorResponse: any;

  editAdminForm = this.fb.group({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phoneNo: new FormControl('', [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11),
    ]),
    email: new FormControl('', Validators.email),
    hasAccess: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.editAdminForm.patchValue({
      username: this.data.admin.username,
      name: this.data.admin.name,
      phoneNo: this.data.admin.phoneNo,
      email: this.data.admin.email,
      hasAccess: this.data.admin.hasAccess,
    });
  }

  constructor(
    private adminService: AdminService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AdminEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.heading = data.heading;
  }

  editAdmin(id: any) {
    const payload = {
      username: this.editAdminForm.controls['username'].value!,
      name: this.editAdminForm.controls['name'].value!,
      phoneNo: this.editAdminForm.controls['phoneNo'].value!,
      email: this.editAdminForm.controls['email'].value!,
      hasAccess: this.editAdminForm.controls['hasAccess'].value!,
    };
    this.adminService.editAdminById(id, payload).subscribe({
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
