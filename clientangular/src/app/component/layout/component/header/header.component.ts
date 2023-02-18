import { Component } from '@angular/core';
import { LoginService } from 'app/services/authService/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent {

  constructor(private loginService: LoginService){}

  isAuthenticated(){
    return this.loginService.isUserAuthenticated();
  }

  getUserInform() {
    return this.loginService.getUserInform();
  }

  logout() {
    this.loginService.logout();
  }
}
