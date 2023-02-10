import { Component } from '@angular/core';
import { SignupService } from 'app/services/userService/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  public fullname = '';
  public email = '';
  public password = '';

  constructor(private signup: SignupService){}

  public submitForm(): void {
    this.signup.signup(this.fullname, this.email, this.password)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }
}
