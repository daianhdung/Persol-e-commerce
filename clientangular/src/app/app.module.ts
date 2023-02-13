import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
} from '@coreui/angular';
import { ReactiveFormsModule } from '@angular/forms';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';

import { IconModule } from '@coreui/icons-angular';

import { IconSetService } from '@coreui/icons-angular';
import { AdminDashboardComponent } from './component/pages/admin/admin-dashboard/admin-dashboard.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

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
    NgbModule,

    //Admin Module
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    PerfectScrollbarModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    HeaderModule
  ],
  providers: [
  {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
  },
  IconSetService, Title],
  bootstrap: [AppComponent]
})
export class AppModule {
}
