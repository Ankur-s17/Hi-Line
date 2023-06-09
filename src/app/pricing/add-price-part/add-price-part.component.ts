import { Component } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-add-price-part',
  templateUrl: './add-price-part.component.html',
  styleUrls: ['./add-price-part.component.scss'],
})
export class AddPricePartComponent {
  constructor(public modal: DataSharingService) {}
}
