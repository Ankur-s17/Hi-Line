import { Component } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { InventoryEditService } from 'src/app/services/inventory-edit.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent {
  // showDeleteModal: boolean = false;
  constructor(
    private myService: InventoryEditService,
    public modal: DataSharingService
  ) {}

  updateVariable(): void {
    this.myService.setMyVariable(true);
  }

  // this will delete modal
  openDeleteModal() {}
}
