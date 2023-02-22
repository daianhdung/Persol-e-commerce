import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private allCateAPI = environment.apiUrl + 'categories';


  constructor(private http: HttpClient) { }

  getAllCategory():Observable<any>{
    return this.http.get(this.allCateAPI)
  }
}
