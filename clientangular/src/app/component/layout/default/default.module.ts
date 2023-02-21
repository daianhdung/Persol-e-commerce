import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { HomeComponent } from '../../pages/home/home.component';
import { DetailComponent } from '../../pages/detail/detail.component';
import { CarouselComponent } from '../component/carousel/carousel/carousel.component';
import { ContactComponent } from 'app/component/pages/contact/contact.component';
import { ProductComponent } from 'app/component/pages/product/product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    HomeComponent, 
    DetailComponent,
    ContactComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    CarouselComponent,
    ReactiveFormsModule,
    SwiperModule,
  ]
})
export class DefaultModule { }
