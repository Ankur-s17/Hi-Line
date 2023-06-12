import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainSectionsRoutingModule } from './main-sections-routing.module';
import { InventoryComponent } from './inventory/inventory.component';
import { UsersComponent } from './users/users.component';
import { PricingComponent } from './pricing/pricing.component';
import { AreaComponent } from './area/area.component';
import { ToolsComponent } from './tools/tools.component';
import { CommonComponent } from './common/common.component';


@NgModule({
  declarations: [
    InventoryComponent,
    UsersComponent,
    PricingComponent,
    AreaComponent,
    ToolsComponent,
    CommonComponent
  ],
  imports: [
    CommonModule,
    MainSectionsRoutingModule
  ]
})
export class MainSectionsModule { }
