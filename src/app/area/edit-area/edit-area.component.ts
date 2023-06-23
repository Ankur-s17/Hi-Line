import { Component } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-edit-area',
  templateUrl: './edit-area.component.html',
  styleUrls: ['./edit-area.component.scss'],
})
export class EditAreaComponent {
  constructor(public modal: DataSharingService) {}
}
