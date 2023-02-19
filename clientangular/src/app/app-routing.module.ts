import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './auth/admin.guard';
import { UserGuard } from './auth/user.guard';
import { AdminlayoutComponent } from './component/layout/admin/adminlayout/adminlayout.component';
import { AuthenlayoutComponent } from './component/layout/auth/authenlayout/authenlayout.component';
import { DefaultlayoutComponent } from './component/layout/default/defaultlayout/defaultlayout.component';
import { AdminDashboardComponent } from './component/pages/admin/admin-dashboard/admin-dashboard.component';
import { CreateProductComponent } from './component/pages/admin/admin-product/create-product/create-product.component';
import { ListProductComponent } from './component/pages/admin/admin-product/list-product/list-product.component';
import { UserCreateComponent } from './component/pages/admin/admin-user/user-create/user-create.component';
import { UserListComponent } from './component/pages/admin/admin-user/user-list/user-list.component';
import { AdmindetailComponent } from './component/pages/admin/admindetail/admindetail.component';
import { ContactComponent } from './component/pages/contact/contact.component';
import { DetailComponent } from './component/pages/detail/detail.component';
import { PageNotFoundComponent } from './component/pages/page-not-found/page-not-found.component';
import { ProductComponent } from './component/pages/product/product.component';
import { ProfileComponent } from './component/pages/profile/profile.component';
import { SignupComponent } from './component/pages/signup/signup.component';

const routes: Routes = [
  //Default Routes
  {
    path: '',
    component: DefaultlayoutComponent,
    // canActivate: [UserGuard],
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('./component/layout/default/default.module').then(
            (m) => m.DefaultModule
          ),
      },
      { path: 'detail', component: DetailComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'product', component: ProductComponent }
    ],
  },
  //Home Routes
  {
    path: '',
    component: AuthenlayoutComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      {
        path: 'login',
        loadChildren: () =>
          import('./component/layout/auth/auth.module').then(
            (m) => m.AuthModule
          ),
      },
      { path: 'signup', component: SignupComponent },
    ],
  },
  {
    path: '',
    component: AdminlayoutComponent,
    canActivate: [AdminGuard],
    children: [
      { path: '', redirectTo: '/admin-home', pathMatch: 'full' },
      {
        path: 'admin-home',
        loadChildren: () =>
          import('./component/layout/admin/admin.module').then(
            (m) => m.AdminModule
          ),
      },
      { path: 'admin-detail', component: AdmindetailComponent },
      { path: 'admin-dashboard', component: AdminDashboardComponent },
      { path: 'admin-user-list', component: UserListComponent },
      { path: 'admin-product-list', component: ListProductComponent },
      { path: 'admin-user-create', component: UserCreateComponent },
      { path: 'admin-product-create', component: CreateProductComponent },
      { path: 'admin-profile', component: ProfileComponent }
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
