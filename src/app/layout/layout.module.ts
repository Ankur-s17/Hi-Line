import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ProfileBannerComponent } from './profile-banner/profile-banner.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SideNavComponent,
    FooterComponent,
    MainComponent,
    ProfileBannerComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
  ],
  // providers: [NavbarComponent]
})
export class LayoutModule { }
