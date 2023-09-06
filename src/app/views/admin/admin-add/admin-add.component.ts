import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';
// import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.scss'],
})
export class AdminAddComponent {
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
    private adminService: AdminService,
    // private toastr: ToastrService,
    private router: Router
  ) {}

  addAdmin() {
    this.adminService.addAdmin(this.adminAddForm.value).subscribe(
      (result) => {
        this.responseData = result;
        this.adminAddForm.reset();
        // this.toastr.success(result.message);
        this.errorMessage = null;
        this.router.navigate(['/admin/adminList']);
      },
      (err) => {
        this.errorMessage = err.error.message;
      }
    );
  }
}
