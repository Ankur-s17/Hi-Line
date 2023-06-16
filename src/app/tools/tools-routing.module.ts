import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolManagementComponent } from './tool-management/tool-management.component';

const routes: Routes = [
  {
    path: 'tools-management',
    component: ToolManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule { }
