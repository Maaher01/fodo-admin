import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminListComponent } from './admin-list/admin-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Admin',
    },
    children: [
      {
        path: 'adminAdd',
        component: AdminAddComponent,
        data: {
          title: 'Add Admin',
        },
      },
      {
        path: 'adminList',
        component: AdminListComponent,
        data: {
          title: 'Admin List',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
