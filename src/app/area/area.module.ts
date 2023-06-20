import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaRoutingModule } from './area-routing.module';
import { AreaManagementComponent } from './area-management/area-management.component';
import { RootComponent } from './root/root.component';


@NgModule({
  declarations: [
    AreaManagementComponent,
    RootComponent
  ],
  imports: [
    CommonModule,
    AreaRoutingModule
  ]
})
export class AreaModule { }
