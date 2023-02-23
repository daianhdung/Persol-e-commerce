import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productAPI = environment.apiUrl + 'product';

  constructor(private http: HttpClient) { }

  getProductByFilter(data : any) :Observable<any>{
    
    return this.http.post(this.productAPI + "-filter", data)
  }
}
