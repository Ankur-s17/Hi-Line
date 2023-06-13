import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { UsersComponent } from './users/users.component';
import { PricingComponent } from './pricing/pricing.component';
import { AreaComponent } from './area/area.component';
import { ToolsComponent } from './tools/tools.component';
import { CommonComponent } from './common/common.component';
import { MainComponent } from '../layout/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: CommonComponent,
    children: [
      { path: 'inventory', component: InventoryComponent },
      { path: 'users', component: UsersComponent },
      { path: 'price', component: PricingComponent },
      { path: 'area', component: AreaComponent },
      { path: 'tools', component: ToolsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainSectionsRoutingModule {}
