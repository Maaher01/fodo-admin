import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    name: 'Admins',
    iconComponent: { name: 'cil-people' },
    children: [
      {
        name: 'Add a new admin',
        url: '/admin/adminAdd',
      },
      {
        name: 'View All Admins',
        url: '/admin/adminList',
      },
    ],
  },
  {
    name: 'Users',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Add a new user',
        url: '/user/userAdd',
      },
      {
        name: 'View All Users',
        url: '/user/userList',
      },
    ],
  },
  {
    name: 'Products',
    iconComponent: { name: 'cil-basket' },
    children: [
      {
        name: 'Add a product',
        url: '/product/addProduct',
      },
      {
        name: 'View All Products',
        url: '/product/productList',
      },
    ],
  },
];
