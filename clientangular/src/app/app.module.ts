import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/layout/component/header/header.component';
import { FooterComponent } from './component/layout/component/footer/footer.component';
import { DetailComponent } from './component/pages/detail/detail.component';
import { DefaultlayoutComponent } from './component/layout/default/defaultlayout/defaultlayout.component';
import { AdminlayoutComponent } from './component/layout/admin/adminlayout/adminlayout.component';
import { AdminheaderComponent } from './component/layout/component/admin/adminheader/adminheader.component';
import { AdminfooterComponent } from './component/layout/component/admin/adminfooter/adminfooter.component';
import { AdmindetailComponent } from './component/pages/admin/admindetail/admindetail.component';
import { AdminhomeComponent } from './component/pages/admin/adminhome/adminhome.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthenlayoutComponent } from './component/layout/auth/authenlayout/authenlayout.component';
import { SignupComponent } from './component/pages/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DefaultlayoutComponent,
    AdminlayoutComponent,
    AdminheaderComponent,
    AdminfooterComponent,
    AdminhomeComponent,
    AdmindetailComponent,
    AuthenlayoutComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
