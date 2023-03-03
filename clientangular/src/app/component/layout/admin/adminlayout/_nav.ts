import { INavData } from '@coreui/angular';



export const navItems: INavData[] = [

  {
    name: 'Dashboard',
    url: '/admin-dashboard',
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
    url: '/admin-user-list',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Form',
        url: '/admin-user-create'
      },{
        name: 'List',
        url: '/admin-user-list'
      }
    ]
  },
  {
    name: 'Product',
    url: '/admin-product-list',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-clipboard' },
    children: [
      {
        name: 'Form',
        url: '/admin-product-create'
      },{
        name: 'List',
        url: '/admin-product-list'
      }
    ]
  },
  {
    name: 'Brand',
    url: '/admin-brand-list',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-gem' },
    children: [
      {
        name: 'Form',
        url: '/admin-brand-create'
      },{
        name: 'List',
        url: '/admin-brand-list'
      }
    ]
  },
  {
    name: 'Category',
    url: '/admin-category-list',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil3d' },
    children: [
      {
        name: 'Form',
        url: '/admin-category-create'
      },{
        name: 'List',
        url: '/admin-category-list'
      }
    ]
  },
  {
    name: 'Mail',
    url: '/admin-mail',
    iconComponent: { name: 'cil-envelope-closed' },
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
        url: '/admin-profile'
      },
      {
        name: 'Password',
        url: '/base/accordion'
      }
    ]
  }
];
