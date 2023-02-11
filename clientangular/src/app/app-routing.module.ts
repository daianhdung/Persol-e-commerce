import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './auth/admin.guard';
import { UserGuard } from './auth/user.guard';
import { AdminlayoutComponent } from './component/layout/admin/adminlayout/adminlayout.component';
import { AuthenlayoutComponent } from './component/layout/auth/authenlayout/authenlayout.component';
import { DefaultlayoutComponent } from './component/layout/default/defaultlayout/defaultlayout.component';
import { AdmindetailComponent } from './component/pages/admin/admindetail/admindetail.component';
import { DetailComponent } from './component/pages/detail/detail.component';
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
