import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from '../../pages/login/login.component';
import { SignupComponent } from 'app/component/pages/signup/signup.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent,
    SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
