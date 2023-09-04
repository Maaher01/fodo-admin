import { Component } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  responseData: any;
  errorResponse!: string;

  adminForgotPasswordForm = this.fb.group({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(11),
    ]),
  });

  constructor(private fb: FormBuilder, private adminService: AdminService) {}

  forgotPasswordAdmin() {
    const username = this.adminForgotPasswordForm.controls['username'].value;
    const newPassword = this.adminForgotPasswordForm.controls['password'].value;
    this.adminService.forgotPassword({ username, newPassword }).subscribe({
      next: () => {
        this.adminForgotPasswordForm.reset();
      },
      error: (err) => {
        this.errorResponse = err.error.message;
      },
    });
  }
}
