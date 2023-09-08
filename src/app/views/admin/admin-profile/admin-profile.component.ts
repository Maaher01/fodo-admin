import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Admin } from 'src/app/models/admin.interface';
import { AdminEditComponent } from '../admin-edit/admin-edit.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss'],
})
export class AdminProfileComponent implements OnInit {
  adminData: any;
  admin: any;

  constructor(private adminService: AdminService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAdminInfo();
  }

  getAdminInfo() {
    this.adminService.getAdminInfo().subscribe((result) => {
      (this.adminData = result), (this.admin = this.adminData.data);
      console.log(this.admin);
    });
  }

  openEditDialog(admin: any) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      heading: 'Edit Admin',
      admin: admin,
    };

    this.dialog.open(AdminEditComponent, dialogConfig);
  }
}
