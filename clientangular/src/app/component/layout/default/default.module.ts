import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { HomeComponent } from '../../pages/home/home.component';
import { DetailComponent } from '../../pages/detail/detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from '../component/carousel/carousel/carousel.component';


@NgModule({
  declarations: [
    HomeComponent, 
    DetailComponent,
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    NgbModule,
    CarouselComponent
  ]
})
export class DefaultModule { }
