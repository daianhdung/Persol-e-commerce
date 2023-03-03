import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private allBrandAPI = environment.apiUrl + 'brands';


  constructor(private http: HttpClient) { }

  getAllBrand():Observable<any>{
    return this.http.get(this.allBrandAPI)
  }

  getImageBrand( imageName: any):Observable<any>{
    return this.http.get(this.allBrandAPI + imageName)
  }

  getBrandsByCategoryId(idCate: any):Observable<any>{
    return this.http.get(environment.apiUrl + `categories/${idCate}/brands`)
  }
}
