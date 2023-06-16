import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { PriceManagementComponent } from './price-management/price-management.component';


@NgModule({
  declarations: [
    PriceManagementComponent
  ],
  imports: [
    CommonModule,
    PricingRoutingModule
  ]
})
export class PricingModule { }
