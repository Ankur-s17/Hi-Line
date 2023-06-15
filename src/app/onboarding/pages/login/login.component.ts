import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private route: Router, private loginService: LoginService) {}
  // loginObj: any = {
  //   company_code: '',
  //   email: '',
  //   password: '',
  // };

  loginForm = new FormGroup({
    company_code: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  // Login function 
  handleLogin() {
    // calling login service and getting access token 
    this.loginService.onLogin(this.loginForm.value).subscribe((res) => {
      // debugger
      console.log('response', res);
      localStorage.setItem('token', res.data.access_token);
    });
    this.route.navigate(['/inventory']);
  }

  // Login getters function
  get company_code() {
    return this.loginForm.get('company_code');
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
