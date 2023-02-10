import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminhomeComponent } from 'app/component/pages/admin/adminhome/adminhome.component';
import { AdmindetailComponent } from 'app/component/pages/admin/admindetail/admindetail.component';


@NgModule({
  declarations: [
    AdminhomeComponent,
    AdmindetailComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
