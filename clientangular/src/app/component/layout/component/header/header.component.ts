import { Component } from '@angular/core';
import { LoginService } from 'app/services/authService/login.service';
import { BrandService } from 'app/services/brandService/brand.service';
import { FilterService } from 'app/services/productService/filter.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
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
  imgBrandAPI = environment.apiUrl + 'images/brand/';

  constructor(
    private loginService: LoginService,
    private brandService: BrandService,
    private filterService: FilterService
  ) {}

  isAuthenticated() {
    return this.loginService.isUserAuthenticated();
  }

  getUserInform() {
    return this.loginService.getUserInform();
  }

  logout() {
    this.loginService.logout();
  }

  filterBrandByCate(idCate:any, idBrand:any){
    this.filterService.handleCheckBrandByCategory(idCate, idBrand)
  }

  ngOnInit() {
    this.navHead.map((item) => {
      this.brandService.getBrandsByCategoryId(item.id).subscribe({
        next: (repsonse) => {
          item.brands = repsonse.data;
        },
        error: (error) => console.log(error),
      });
    });
  }
}
