import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriceManagementComponent } from './price-management/price-management.component';

const routes: Routes = [
  {
    path: 'price-management',
    component: PriceManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricingRoutingModule { }
