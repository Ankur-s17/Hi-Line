import { Component } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-price-management',
  templateUrl: './price-management.component.html',
  styleUrls: ['./price-management.component.scss'],
})
export class PriceManagementComponent {
  constructor(public modal: DataSharingService) {}
  
}
