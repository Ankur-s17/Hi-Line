import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../inventory/inventory.module').then(
            (m) => m.InventoryModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('../user-management/user-management.module').then(
            (m) => m.UserManagementModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('../pricing/pricing.module').then((m) => m.PricingModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../area/area.module').then((m) => m.AreaModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../tools/tools.module').then((m) => m.ToolsModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../profile-setting/profile-setting.module').then(
            (m) => m.ProfileSettingModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
