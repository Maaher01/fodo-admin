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
      },
      {
        name: 'View All Admins',
      },
    ],
  },
  {
    name: 'Users',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Add a new user',
      },
      {
        name: 'View All Users',
      },
    ],
  },
  {
    name: 'Products',
    iconComponent: { name: 'cil-basket' },
    children: [
      {
        name: 'Add a product',
      },
      {
        name: 'View All Products',
      },
    ],
  },
];
