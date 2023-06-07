import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    company_code: new FormControl('', [Validators.required]),
    company_email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  handleLogin() {
    console.log(this.loginForm.value);
  }

  get company_code() {
    return this.loginForm.get('company_code');
  }

  get commpany_email() {
    return this.loginForm.get('company_email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
