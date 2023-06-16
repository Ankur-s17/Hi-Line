import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaRoutingModule } from './area-routing.module';
import { AreaManagementComponent } from './area-management/area-management.component';


@NgModule({
  declarations: [
    AreaManagementComponent
  ],
  imports: [
    CommonModule,
    AreaRoutingModule
  ]
})
export class AreaModule { }
