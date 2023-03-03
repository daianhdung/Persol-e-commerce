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
import { PageNotFoundComponent } from './component/pages/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CompareComponent } from './component/pages/compare/compare.component';
import { CompareBarComponent } from './component/layout/component/compare-bar/compare-bar.component';
import { CreateCategoryComponent } from './component/pages/admin/admin-category/create-category/create-category.component';
import { UpdateCategoryComponent } from './component/pages/admin/admin-category/update-category/update-category.component';
import { ListCategoryComponent } from './component/pages/admin/admin-category/list-category/list-category.component';
import { CreateBrandComponent } from './component/pages/admin/admin-brand/create-brand/create-brand.component';
import { UpdateBrandComponent } from './component/pages/admin/admin-brand/update-brand/update-brand.component';
import { ListBrandComponent } from './component/pages/admin/admin-brand/list-brand/list-brand.component';
import { environment } from 'environments/environment';





const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

export function tokenGetter(this: any) {
  console.log(this.CookieService.get('jwtToken'));
  return this.CookieService.get('jwtToken');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DefaultlayoutComponent,
    AdminlayoutComponent,
    AdminheaderComponent,
    AdminfooterComponent,
    AuthenlayoutComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["https://nhom5.eproject.asia"],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }),
    NgbModule,
    HttpClientModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),


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
