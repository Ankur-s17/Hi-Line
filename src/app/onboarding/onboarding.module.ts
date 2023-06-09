import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { IndexComponent } from './components/index/admin-auth.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // AdminAuthComponent,
    IndexComponent,
    LoginComponent,
    ForgetPasswordComponent,
    VerifyEmailComponent,
    ResetPasswordComponent,
  ],
  imports: [CommonModule, OnboardingRoutingModule, ReactiveFormsModule],
  // providers: [LoginComponent]
})
export class OnboardingModule {}
