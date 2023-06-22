import { Component } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-area-management',
  templateUrl: './area-management.component.html',
  styleUrls: ['./area-management.component.scss']
})
export class AreaManagementComponent {
  constructor(public modal: DataSharingService) {}

}
