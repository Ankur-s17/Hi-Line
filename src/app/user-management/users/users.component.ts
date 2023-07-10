import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { UserManagementService } from 'src/app/services/user-management.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userMangementData: any;

  constructor(
    public modal: DataSharingService,
    private userData: UserManagementService
  ) {}

  ngOnInit(): void {
    this.getUserManagementData();
  }

  getUserManagementData() {
    this.userData.userManagementData().subscribe((data) => {
      this.userMangementData = data;
    });
  }
}
