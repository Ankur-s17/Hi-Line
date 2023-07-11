import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {
  constructor(public modal: DataSharingService) {}

  userAddForm = new FormGroup({
    employeeId: new FormControl(''),
  });
 
  hadleUserAddForm(data: any){   
    console.log(data);    
  }

  get employeeId() {
    return this.userAddForm.get('employeeId');
  }
}
