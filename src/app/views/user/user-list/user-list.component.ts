import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  userData: any;
  users: any;
  errorResponse: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((results) => {
      (this.userData = results), (this.users = this.userData.data);
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
        this.userService.deleteUserById(id).subscribe((result) => {
          this.getAllUsers();
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your entry is safe :)', 'error');
      }
    });
  }
}
