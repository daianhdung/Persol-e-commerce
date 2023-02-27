import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedInUser: any; // Property to store logged in user data

  private userAllAPI = environment.apiUrl + 'users';

  constructor(private http: HttpClient) { }

  getAllUser():Observable <any> {
    return this.http.get(this.userAllAPI)
  }
}
