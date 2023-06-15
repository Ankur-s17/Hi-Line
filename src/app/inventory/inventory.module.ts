import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { LogComponent } from './log/log.component';
import { AddComponent } from './add/add.component';
import { ReturnComponent } from './return/return.component';
import { TabsComponent } from './tabs/tabs.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LogComponent, AddComponent, ReturnComponent, TabsComponent],
  imports: [CommonModule, InventoryRoutingModule, SharedModule],
})
export class InventoryModule {}
