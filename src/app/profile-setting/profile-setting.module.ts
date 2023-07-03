import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileSettingRoutingModule } from './profile-setting-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileSettingRoutingModule
  ]
})
export class ProfileSettingModule { }
