import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  responseData: any;
  errorMessage: any;

  adminAddForm = this.fb.group({
    email: new FormControl('', Validators.email),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(11),
    ]),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phoneNo: new FormControl('', [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11),
    ]),
    role: new FormControl('', Validators.required),
    hasAccess: new FormControl('', Validators.required),
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  register() {
    this.authService.register(this.adminAddForm.value).subscribe(
      (result) => {
        this.responseData = result;
        this.adminAddForm.reset();
        this.errorMessage = null;
        this.router.navigate(['/auth/login']);
      },
      (err) => {
        this.errorMessage = err.error.message;
      }
    );
  }
}
