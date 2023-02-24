import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'app/services/productService/product.service';
import { environment } from 'environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  id: any
  product : any = {}

  imgImageProductAPI = environment.apiUrl + 'images/product_image/';

  constructor(private route: ActivatedRoute, private productService: ProductService, private spinner: NgxSpinnerService){
    spinner.show()
  }

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id')
    this.productService.getProductById(this.id).subscribe({
      next: response => {
        this.product = response.data
        console.log(response);
      },
      error: error => {
        console.log(error)
        this.spinner.hide()
      },
      complete: () => this.spinner.hide()
    })
  }
}
