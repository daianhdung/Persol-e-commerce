import { INavData } from '@coreui/angular';



export const navItems: INavData[] = [

  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Store'
  },
  {
    name: 'Users',
    url: '/admin-user',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Form',
        url: 'admin-user/form'
      },{
        name: 'List',
        url: 'admin-user/list'
      }
    ]
  },
  {
    name: 'Product',
    url: '/admin-product',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-clipboard' },
    children: [
      {
        name: 'Form',
        url: 'admin-product/form'
      },{
        name: 'List',
        url: 'admin-product/list'
      }
    ]
  },
  {
    name: 'Account',
    title: true
  },
  {
    name: 'Setting',
    url: '/admin-account',
    iconComponent: { name: 'cil-settings' },
    children: [
      {
        name: 'Profile',
        url: '/base/breadcrumbs'
      },
      {
        name: 'Password',
        url: '/base/accordion'
      }
    ]
  }
];
