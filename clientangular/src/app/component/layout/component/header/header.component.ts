import { Component } from '@angular/core';
import { LoginService } from 'app/services/authService/login.service';
import { BrandService } from 'app/services/brandService/brand.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  navHead = [
    {
      id: '1',
      name: 'Glasses',
      brands: [{ name: '', image: '' }],
    },
    {
      id: '2',
      name: 'Lenses',
      brands: [{ name: '', image: '' }],
    },
    {
      id: '3',
      name: 'Sunglasses',
      brands: [{ name: '', image: '' }],
    },
  ];
  imgBrandAPI = environment.apiUrl + 'images/brand/';

  constructor(
    private loginService: LoginService,
    private brandService: BrandService
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

  ngOnInit() {
    this.navHead.map((item) => {
      this.brandService.getBrandsByCategoryId(item.id).subscribe({
        next: (repsonse) => {
          item.brands = repsonse.data;
          console.log(this.navHead);
        },
        error: (error) => console.log(error),
      });
    });
  }
}
