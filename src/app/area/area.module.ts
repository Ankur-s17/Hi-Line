import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaRoutingModule } from './area-routing.module';
import { AreaManagementComponent } from './area-management/area-management.component';
import { RootComponent } from './root/root.component';
import { SharedModule } from '../shared/shared.module';
import { AddAreaComponent } from './add-area/add-area.component';
import { EditAreaComponent } from './edit-area/edit-area.component';

@NgModule({
  declarations: [AreaManagementComponent, RootComponent, AddAreaComponent, EditAreaComponent],
  imports: [CommonModule, AreaRoutingModule, SharedModule],
})
export class AreaModule {}
