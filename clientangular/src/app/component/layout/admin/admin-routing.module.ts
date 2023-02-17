import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from 'app/component/pages/admin/admin-dashboard/admin-dashboard.component';
import { AdmindetailComponent } from '../../pages/admin/admindetail/admindetail.component';
import { AdminhomeComponent } from '../../pages/admin/adminhome/adminhome.component';

const routes: Routes = [
  {
    path: '',
    component: AdminhomeComponent,
    children: [
      { path: 'admin-home', component: AdminhomeComponent },
      { path: 'admin-detail', component: AdmindetailComponent },
      { path: 'admin-dashboard', component: AdminDashboardComponent },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
