import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminhomeComponent } from 'app/component/pages/admin/adminhome/adminhome.component';
import { AdmindetailComponent } from 'app/component/pages/admin/admindetail/admindetail.component';
import { AdminDashboardComponent } from 'app/component/pages/admin/admin-dashboard/admin-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';

import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { UserListComponent } from 'app/component/pages/admin/admin-user/user-list/user-list.component';
import { ListProductComponent } from 'app/component/pages/admin/admin-product/list-product/list-product.component';
import { CreateProductComponent } from 'app/component/pages/admin/admin-product/create-product/create-product.component';
import { UpdateProductComponent } from 'app/component/pages/admin/admin-product/update-product/update-product.component';
import { UserCreateComponent } from 'app/component/pages/admin/admin-user/user-create/user-create.component';
import { UserUpdateComponent } from 'app/component/pages/admin/admin-user/user-update/user-update.component';
import { ProfileComponent } from 'app/component/pages/profile/profile.component';




@NgModule({
  declarations: [
    AdminhomeComponent,
    AdmindetailComponent,
    AdminDashboardComponent,
    UserListComponent,
    UserCreateComponent,
    UserUpdateComponent,
    ListProductComponent,
    CreateProductComponent,
    UpdateProductComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    

    CardModule,
    NavModule,
    IconModule,
    TabsModule,
    CommonModule,
    GridModule,
    ProgressModule,
    ReactiveFormsModule,
    ButtonModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    ChartjsModule,
    AvatarModule,
    TableModule,
    
  ],
})
export class AdminModule { }
