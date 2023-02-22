import { Component } from '@angular/core';
import { BrandService } from 'app/services/brandService/brand.service';
import { CategoryService } from 'app/services/categoryService/category.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-sidebar-filter',
  templateUrl: './sidebar-filter.component.html',
  styleUrls: ['./sidebar-filter.component.scss']
})
export class SidebarFilterComponent {

  listBrand: any[] = []
  listCate: any[] = []
 
  imgBrandAPI = environment.apiUrl + 'images/brand/';

  constructor(private brandService: BrandService, private categoryService: CategoryService){}

  ngOnInit(){
    this.brandService.getAllBrand().subscribe({
      next : (reponse) => {
        this.listBrand = reponse.data
        console.log(this.listBrand);
      },
      error: (repsonse) => {
        console.log(repsonse.message);
      }
    })

    this.categoryService.getAllCategory().subscribe({
      next : (reponse) => {
        this.listCate = reponse.data
        console.log(this.listCate);
      },
      error: (repsonse) => {
        console.log(repsonse.message);
      }
    })
  }
}
