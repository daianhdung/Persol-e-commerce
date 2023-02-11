import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginAPI = environment.apiUrl + 'login';

  constructor() { }

  public login(email: string, password: string){
    return axios.post(this.loginAPI, {
      email,
      password
    })
  }
}
