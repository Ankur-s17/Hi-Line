import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryRoutingModule } from './inventory-routing.module';
import { LogComponent } from './log/log.component';
import { AddComponent } from './add/add.component';
import { ReturnComponent } from './return/return.component';
import { TabsComponent } from './tabs/tabs.component';
import { SharedModule } from '../shared/shared.module';
import { EditDescriptionComponent } from './edit-description/edit-description.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    LogComponent,
    AddComponent,
    ReturnComponent,
    TabsComponent,
    EditDescriptionComponent,
    IndexComponent,
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
})
export class InventoryModule {}
