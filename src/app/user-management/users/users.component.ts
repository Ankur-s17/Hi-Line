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
  displayData: Array<any>;
  renderUserData: Array<any>;
  userDataLength: number;

  initialValue: number = 0;
  finalValue: number = 5;

  disabledNextBtn: boolean = true;

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
      this.displayData = this.userMangementData;
      this.userDataLength = this.userMangementData.length;
      if (this.userDataLength > 5) {
        this.renderUserData = this.displayData.slice(
          this.initialValue,
          this.finalValue
        );
      } else {
        this.finalValue = this.userDataLength;
        this.renderUserData = this.displayData.slice(
          this.initialValue,
          this.finalValue
        );
        this.disabledNextBtn;
      }
    });
  }
}
