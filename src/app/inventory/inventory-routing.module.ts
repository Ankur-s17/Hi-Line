import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { EditDescriptionComponent } from './edit-description/edit-description.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      { path: '', redirectTo: 'inventory', pathMatch: 'full' },
      { path: 'inventory', component: TabsComponent },
      { path: 'inventory/edit', component: EditDescriptionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
