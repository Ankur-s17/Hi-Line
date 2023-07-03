import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { InventoryEditService } from 'src/app/services/inventory-edit.service';
import { InventoryLogService } from 'src/app/services/inventory-log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {
  // showDeleteModal: boolean = false;
  constructor(
    private myService: InventoryEditService,
    private inventoryService: InventoryLogService,
    public modal: DataSharingService
  ) {}
  
  ngOnInit(): void {
    this.getInventoryLog();
  }

  updateVariable(): void {
    this.myService.setMyVariable(true);
  }

  // calling Inventory log table service
  inventoryTableData: any;
  getInventoryLog() {
    this.inventoryService.getInvtLogData().subscribe((result) => {
      this.inventoryTableData = result;
      // console.log(this.inventoryTableData);
    });
  }
}
