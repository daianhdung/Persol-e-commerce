import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/layout/component/header/header.component';
import { FooterComponent } from './component/layout/component/footer/footer.component';
import { DefaultlayoutComponent } from './component/layout/default/defaultlayout/defaultlayout.component';
import { AdminlayoutComponent } from './component/layout/admin/adminlayout/adminlayout.component';
import { AdminheaderComponent } from './component/layout/component/admin/adminheader/adminheader.component';
import { AdminfooterComponent } from './component/layout/component/admin/adminfooter/adminfooter.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthenlayoutComponent } from './component/layout/auth/authenlayout/authenlayout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { JwtModule } from '@auth0/angular-jwt';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DefaultlayoutComponent,
    AdminlayoutComponent,
    AdminheaderComponent,
    AdminfooterComponent,
    AuthenlayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    JwtModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
