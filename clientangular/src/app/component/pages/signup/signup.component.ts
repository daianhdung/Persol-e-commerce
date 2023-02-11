import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SignupService } from 'app/services/authService/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {

  public formData = this.formBuilder.group({
    fullname: ['', Validators.required],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      ],
    ],
    password: ['', [Validators.required, Validators.minLength(6)]],
    repassword: ['', Validators.required],
    check: [false, Validators.requiredTrue]
  }, {validators: this.checkPasswords});
  
  
  constructor(
    private signup: SignupService,
    private formBuilder: FormBuilder
  ) {}

  public isFormValid() {
    return this.formData.valid;
  }

  private checkPasswords(group: FormGroup) {
    const password = group.get('password');
    const rePassword = group.get('repassword');
    if (password && rePassword) {
      return password.value === rePassword.value ? null : { notSame: true };
    }
    return { notSame: true };
  }

  public submitForm(): void {
    if (this.formData.valid) {
      const { fullname, email, password } = this.formData.value;
      if (fullname && email && password) {
        this.signup
          .signup(fullname, email, password)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }
}
