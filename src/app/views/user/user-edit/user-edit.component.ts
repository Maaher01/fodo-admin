import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  heading: string;
  errorResponse: any;

  editUserForm = this.fb.group({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    phoneNo: new FormControl('', [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11),
    ]),
    email: new FormControl('', Validators.email),
    gender: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.editUserForm.patchValue({
      fullName: this.data.user.fullName,
      address: this.data.user.address,
      phoneNo: this.data.user.phoneNo,
      email: this.data.user.email,
      gender: this.data.user.gender,
    });
  }

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.heading = data.heading;
  }

  editUser(id: any) {
    const payload = {
      fullName: this.editUserForm.controls['fullName'].value!,
      address: this.editUserForm.controls['address'].value!,
      phoneNo: this.editUserForm.controls['phoneNo'].value!,
      email: this.editUserForm.controls['email'].value!,
      gender: this.editUserForm.controls['gender'].value!,
    };

    this.userService.editUserById(id, payload).subscribe({
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
