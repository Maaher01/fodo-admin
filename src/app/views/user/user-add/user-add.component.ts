import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent {
  responseData: any;
  errorMessage: any;

  userAddForm = this.fb.group({
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
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(11),
    ]),
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  addUser() {
    this.userService.addUser(this.userAddForm.value).subscribe(
      (result) => {
        this.responseData = result;
        this.userAddForm.reset();
        this.errorMessage = null;
        this.router.navigate(['/user/userList']);
      },
      (err) => {
        this.errorMessage = err.error.message;
      }
    );
  }
}
