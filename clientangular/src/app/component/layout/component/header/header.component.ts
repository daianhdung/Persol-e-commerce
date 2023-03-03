import { Component } from '@angular/core';
import { LoginService } from 'app/services/authService/login.service';
import { BrandService } from 'app/services/brandService/brand.service';
import { FilterService } from 'app/services/productService/filter.service';
import { TrackIpService } from 'app/services/trackipService/track-ip.service';
import { environment } from 'environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  imgBrandAPI = environment.imgBrandAPI

  visitorCount: any 
  navHead = [
    {
      id: 1,
      name: 'Sunglasses',
      brands: [{id: '', name: '', image: '' }],
    },
    {
      id: 2,
      name: 'Glasses',
      brands: [{id: '', name: '', image: '' }],
    },
    {
      id: 3,
      name: 'Lenses',
      brands: [{id: '', name: '', image: '' }],
    },
  ];

  constructor(
    private loginService: LoginService,
    private brandService: BrandService,
    private filterService: FilterService,
    private trackIpService: TrackIpService,
    private toastr: ToastrService
  ) {
    
    this.navHead.map((item) => {
      this.brandService.getBrandsByCategoryId(item.id).subscribe({
        next: (repsonse) => {
          item.brands = repsonse.data;
        },
        error: (error) => console.log(error),
      });
    });
  }

  isAuthenticated() {
    return this.loginService.isUserAuthenticated();
  }

  getUserInform() {
    return this.loginService.getUserInform();
  }

  logout() {
    this.loginService.logout();
    this.toastr.success('Logout success')
  }

  filterBrandByCate(idCate:any, idBrand:any){
    this.filterService.handleCheckBrandByCategory(idCate, idBrand)
  }

  ngOnInit() {
    this.trackIpService.getVisitorCount().subscribe({
      next: response => this.visitorCount = response.data
    })
  }
}
