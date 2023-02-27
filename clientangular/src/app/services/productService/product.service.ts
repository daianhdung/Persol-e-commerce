import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productAPI = environment.apiUrl + 'product';

  private productDetailAPI = environment.apiUrl + 'product-detail';

  constructor(private http: HttpClient) { }

  getProductByFilter(data : any) :Observable<any>{
    
    return this.http.post(this.productAPI + "-filter", data)
  }

  getProductById(id: any):Observable<any>{
    return this.http.get(this.productAPI + '/' + id)
  }

  getListProductByIds(id: any):Observable <any>{
    return this.http.get(this.productDetailAPI + `?ids=${id}`)
  }
}
