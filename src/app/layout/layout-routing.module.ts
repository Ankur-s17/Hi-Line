import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { InventoryComponent } from '../main-sections/inventory/inventory.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: MainComponent,
  //   children: [{ path: 'inventory', component: InventoryComponent }],
  // },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../main-sections/main-sections.module').then(
            (m) => m.MainSectionsModule
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
