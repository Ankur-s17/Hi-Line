import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaManagementComponent } from './area-management/area-management.component';
import { RootComponent } from './root/root.component';

const routes: Routes = [
  {
    path: 'area-management',
    component: RootComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaRoutingModule { }
