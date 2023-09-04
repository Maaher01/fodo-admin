import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';
import { Admin } from 'src/app/models/admin.interface';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss'],
})
export class AdminListComponent implements OnInit {
  adminData: any;
  admins!: Admin[];
  errorResponse: any;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getAllAdmins();
  }

  getAllAdmins() {
    this.adminService.getAllAdmin().subscribe((results) => {
      (this.adminData = results), (this.admins = this.adminData.data);
    });
  }

  confirmBox(id: any) {
    Swal.fire({
      title: 'Are you sure want to delete this admin?',
      text: 'You will not be able to recover it!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Deleted!', 'The admin has been deleted.', 'success');
        this.adminService.deleteAdminById(id).subscribe((result) => {
          this.getAllAdmins();
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your entry is safe :)', 'error');
      }
    });
  }
}
