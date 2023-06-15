import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  constructor(private route: Router) {}
  resetPasswordForm = new FormGroup({
    new_password: new FormControl('', [Validators.required]),
    cnfm_new_password: new FormControl('', [Validators.required]),
  });

  // Reset Password Function
  resetPassword() {
    console.log(this.resetPasswordForm.value);
    this.route.navigate(['/']);
  }

  // reset-password getters function
  get new_password() {
    return this.resetPasswordForm.get('new_password');
  }

  get cnfm_new_password() {
    return this.resetPasswordForm.get('cnfm_new_password');
  }
}
