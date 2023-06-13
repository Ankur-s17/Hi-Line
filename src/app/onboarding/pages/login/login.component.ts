import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private route: Router) {}

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
    this.route.navigate(['/inventory'])
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
