import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private request = {}

  signupAPI = 'http://localhost:8000/api/signup';

  constructor() { }

  public setRequest(data : any): void {
    console.log("Đã gửi dữ liệu lên server " + data);
  }

  

  signup(fullname:string, email: string, password: string){
    return axios.post(this.signupAPI, {
      fullname,
      email,
      password
    })
  }
}
