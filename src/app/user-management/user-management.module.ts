import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { RootComponent } from './root/root.component';
import { SharedModule } from '../shared/shared.module';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    RootComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    SharedModule
  ]
})
export class UserManagementModule { }
