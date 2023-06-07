import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
})
export class VerifyEmailComponent {
  constructor(private route: Router) {}
  verifyForm = new FormGroup({
    verify_code: new FormControl('', [Validators.required]),
  });

  handleVerifyCode() {
    console.log(this.verifyForm.value);
    this.route.navigate(['/reset-password']);
  }

  get verify_code() {
    return this.verifyForm.get('verify_code');
  }
}
