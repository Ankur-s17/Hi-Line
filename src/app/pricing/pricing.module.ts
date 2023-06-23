import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingRoutingModule } from './pricing-routing.module';
import { PriceManagementComponent } from './price-management/price-management.component';
import { RootComponent } from './root/root.component';
import { SharedModule } from '../shared/shared.module';
import { AddPricePartComponent } from './add-price-part/add-price-part.component';
import { EditPartComponent } from './edit-part/edit-part.component';

@NgModule({
  declarations: [PriceManagementComponent, RootComponent, AddPricePartComponent, EditPartComponent],
  imports: [CommonModule, PricingRoutingModule, SharedModule],
})
export class PricingModule {}
