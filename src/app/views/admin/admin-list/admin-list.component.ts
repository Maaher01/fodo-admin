import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss'],
})
export class AdminListComponent implements OnInit {
  adminData: any;
  admins: any;
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

  deleteAdminById(id: any) {
    this.adminService.deleteAdminById(id).subscribe({
      next: () => {
        window.location.reload();
      },
      error: (err) => {
        this.errorResponse = err.message;
      },
    });
  }
}
