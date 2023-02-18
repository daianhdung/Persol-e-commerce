import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoginService } from 'app/services/authService/login.service';
import { CookieService } from 'app/services/storageService/cookie.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public formData = this.formBuilder.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      ],
    ],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  constructor(private formBuilder: FormBuilder, private login: LoginService, private cookieService: CookieService,
    private toastr: ToastrService, private router: Router) {}

  public isFormValid() {
    return this.formData.valid;
  }


  public submitForm(): void {
    if (this.formData.valid) {
      const { email, password } = this.formData.value;
      if (email && password) {
        this.login
          .login(email, password)
          .then((response) => {
            console.log(response.data);
            if(response.data.success){
              this.cookieService.set('jwtToken', response.data.data.authorisation.token, response.data.data.authorisation.expiration)
              console.log(response.data);
              if(response.data.data.user.role_id == 1){
                this.router.navigate(['/admin-dashboard'])
              }else if(response.data.data.user.role_id == 2){
                this.router.navigate(['/home'])
              }
            }
          })
          .catch((error) => {
            console.error(error);
            this.toastr.error(error, 'Lỗi')
          });
      }
    }
  }

}
