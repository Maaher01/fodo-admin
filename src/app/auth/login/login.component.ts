import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: any;
  responseData: any;
  errorMessage: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (result) => {
          if (result != null) {
            this.responseData = result;
            localStorage.setItem('token', this.responseData.token);
            this.router.navigate(['/', 'dashboard']);
            // this.toastr.success(result.message);
          }
        },
        (err) => {
          this.errorMessage = err.error.message;
          // if (err.err.errors.username) {
          //   this.toastr.error(err.error.errors.username);
          // }
          // if (err.err.errors.password) {
          //   this.toastr.error(err.error.errors.password);
          // }
        }
      );
    }
  }
}
