import { Component } from '@angular/core';
import { BrandService } from 'app/services/brandService/brand.service';
import { FilterService } from 'app/services/productService/filter.service';
import { environment } from 'environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
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

  listCheckBrandIds : any[] = []

  constructor(private brandService: BrandService, private filterService: FilterService, private spinner : NgxSpinnerService){
    spinner.show()
  }

  handleCheckBrandId(id : any){
    this.filterService.handleCheckBrand(id)
  }

  ngOnInit(){
    this.brandService.getAllBrand().subscribe({
      next : (reponse) => {
        this.listBrand = reponse.data
      },
      error: (repsonse) => {
        console.log(repsonse.message)
        this.spinner.hide()
      },
      complete: () => this.spinner.hide()
    })
  }
}
