import { Component } from '@angular/core';
import { LoginService } from 'app/services/authService/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  navHead = [
    {
      id: '1',
      name: 'Gòng kính',
      brands: [
        { id: '1', name: 'Gòng kính' },
        { id: '2', name: 'Gòng kính' },
        { id: '3', name: 'Gòng kính' },
        { id: '4', name: 'Gòng kính' },
        { id: '5', name: 'Gòng kính 2' },
        { id: '5', name: 'Gòng kính 2' },
        { id: '5', name: 'Gòng kính2 ' },
        { id: '5', name: 'Gòng kính2 ' },
        { id: '5', name: 'Gòng kính2 ' },
      ],
    },
    {
      id: '2',
      name: 'Gòng kính 2',
      brands: [],
    },
    {
      id: '3',
      name: 'Gòng kính 3',
      brands: [],
    },
  ];

  constructor(private loginService: LoginService) {}

  isAuthenticated() {
    return this.loginService.isUserAuthenticated();
  }

  getUserInform() {
    return this.loginService.getUserInform();
  }

  logout() {
    this.loginService.logout();
  }
}
