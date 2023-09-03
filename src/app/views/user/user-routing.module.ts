import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from '../user/user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'User',
    },
    children: [
      {
        path: 'userAdd',
        component: UserAddComponent,
        data: {
          title: 'Add User',
        },
      },
      {
        path: 'userList',
        component: UserListComponent,
        data: {
          title: 'User List',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
