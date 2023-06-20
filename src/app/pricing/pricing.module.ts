import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { PriceManagementComponent } from './price-management/price-management.component';
import { RootComponent } from './root/root.component';


@NgModule({
  declarations: [
    PriceManagementComponent,
    RootComponent
  ],
  imports: [
    CommonModule,
    PricingRoutingModule
  ]
})
export class PricingModule { }
