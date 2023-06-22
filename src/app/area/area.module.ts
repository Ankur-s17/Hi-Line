import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaRoutingModule } from './area-routing.module';
import { AreaManagementComponent } from './area-management/area-management.component';
import { RootComponent } from './root/root.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AreaManagementComponent, RootComponent],
  imports: [CommonModule, AreaRoutingModule, SharedModule],
})
export class AreaModule {}
