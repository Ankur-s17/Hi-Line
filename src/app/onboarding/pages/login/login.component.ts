import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  constructor(
    private route: Router,
    private loginService: LoginService,
    private dataSharingService: DataSharingService
  ) {}


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
      // console.log('admin name', res.data.name);
      // const adminName = res.data.name;
      // this.dataSharingService.setData(adminName);

      if (res.response_code === 200) {
        localStorage.setItem('token', res.data.access_token);
      }
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
