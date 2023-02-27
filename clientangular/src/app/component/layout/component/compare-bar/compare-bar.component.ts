import { Component } from '@angular/core';
import { CompareService } from 'app/services/productService/compare.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-compare-bar',
  templateUrl: './compare-bar.component.html',
  styleUrls: ['./compare-bar.component.scss']
})
export class CompareBarComponent {
  toggleCompare = true

  compareList: any[] = []
  imgProductAPI = environment.apiUrl + 'images/product/';

  constructor(private compareService: CompareService){
    this.compareList = compareService.request
  }

  toggleCompareButton(){
    console.log(this.toggleCompare);
    this.toggleCompare = !this.toggleCompare
    console.log(this.toggleCompare);
  }

  addItemCompare(product:any){
    this.compareService.addCompareProductItem(product)
  }

  removeItemCompare(id:any){
    this.compareService.removeCompareProductItem(id)
  }

  removeAllItemCompare(){
    this.compareService.deleteAllCompareRequest()
  }
}
