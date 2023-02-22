import { Component } from '@angular/core';
import { BrandService } from 'app/services/brandService/brand.service';
import { ProductService } from 'app/services/productService/product.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  sortList = [
    {
      name: 'az',
      lable: 'Tên: A-Z',
    },
    {
      name: 'za',
      lable: 'Tên: A-Z',
    },
    {
      name: 'ascPrice',
      lable: 'Giá tăng dần',
    },
    {
      name: 'dscPrice',
      lable: 'Giá giảm dần',
    },
  ];

  data = {
    keyword: '',
    brandIds: [],
    categoryIds: [],
    sort: 'az',
  };

  pagination : any[] = []

  listProduct : any[] = []

  constructor(private productService: ProductService) {}

  

  ngOnInit() {
    window.scrollTo(0, 0);
    this.productService.getProductByFilter(this.data).subscribe({
      next: (response) => {
        console.log(response);
        this.listProduct = response.data.data
        this.pagination = response.data.links
      },
      error: error => console.log(error)
    })
  }
}
