import { Component } from '@angular/core';
import { BrandService } from 'app/services/brandService/brand.service';
import { environment } from 'environments/environment';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent {
  listBrand: any[] = []

  imgBrandAPI = environment.apiUrl + 'images/brand/';

  constructor(private brandService: BrandService){}

  ngOnInit(){
    this.brandService.getAllBrand().subscribe({
      next : (reponse) => {
        this.listBrand = reponse.data
      },
      error: (repsonse) => {
        console.log(repsonse.message);
      }
    })
  }
}
