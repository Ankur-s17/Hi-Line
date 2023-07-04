import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardingModule } from './onboarding/onboarding.module';
import { LayoutModule } from './layout/layout.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InventoryModule } from './inventory/inventory.module';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';
import { UserManagementModule } from './user-management/user-management.module';
import { PricingModule } from './pricing/pricing.module';
import { ProfileSettingModule } from './profile-setting/profile-setting.module';
import { CustomInterceptor } from './interceptors/custom.interceptor';

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    OnboardingModule,
    LayoutModule,
    HttpClientModule,
    InventoryModule,
    SharedModule,
    UserManagementModule,
    PricingModule,
    ProfileSettingModule,
  ],

  providers: [
    {
      provide: 'API_URL',
      useValue: environment.loginApi,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor,
      multi: true
    },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
