import { Component } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-edit-part',
  templateUrl: './edit-part.component.html',
  styleUrls: ['./edit-part.component.scss'],
})
export class EditPartComponent {
  constructor(public modal: DataSharingService) {}
}
