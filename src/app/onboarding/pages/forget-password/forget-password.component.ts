import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent {
  constructor(private route: Router) {}

  loginForm = new FormGroup({
    company_code: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  handleForgetPassword() {
    console.log(this.loginForm.value);
    this.route.navigate(['/verify-email'])
  }
 
  get company_code() {
    return this.loginForm.get('company_code');
  }
  get email() {
    return this.loginForm.get('email');
  }
}
