import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardingModule } from './onboarding/onboarding.module';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { MainSectionsModule } from './main-sections/main-sections.module';

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    OnboardingModule,
    LayoutModule,
    HttpClientModule,
    MainSectionsModule
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
