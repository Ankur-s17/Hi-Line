import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardingModule } from './onboarding/onboarding.module';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { MainSectionsModule } from './main-sections/main-sections.module';
import { InventoryModule } from './inventory/inventory.module';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';
import { UserManagementModule } from './user-management/user-management.module';
import { PricingModule } from './pricing/pricing.module';

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    OnboardingModule,
    LayoutModule,
    HttpClientModule,
    MainSectionsModule,
    InventoryModule,
    SharedModule,
    UserManagementModule,
    PricingModule
  ],

  providers: [
    {
      provide: 'API_URL',
      useValue: environment.loginApi
    }
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
