import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingRoutingModule } from './pricing-routing.module';
import { PriceManagementComponent } from './price-management/price-management.component';
import { RootComponent } from './root/root.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PriceManagementComponent, RootComponent],
  imports: [CommonModule, PricingRoutingModule, SharedModule],
})
export class PricingModule {}
