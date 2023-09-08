import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { User } from 'src/app/models/user.interface';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  userData: any;
  users!: User[];
  errorResponse: any;
  @Input() user!: any;

  constructor(private userService: UserService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((results) => {
      (this.userData = results), (this.users = this.userData.data);
    });
  }

  openEditDialog(user: any) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.width = "500px";

    dialogConfig.data = {
      heading: 'Edit User',
      user: user,
    };

    this.dialog.open(UserEditComponent, dialogConfig);
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
        this.userService.deleteUserById(id).subscribe((result) => {
          this.getAllUsers();
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your entry is safe :)', 'error');
      }
    });
  }
}
