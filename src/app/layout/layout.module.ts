import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SideNavComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    
  ]
})
export class LayoutModule { }
