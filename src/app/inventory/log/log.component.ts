import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { InventoryEditService } from 'src/app/services/inventory-edit.service';
import { InventoryLogService } from 'src/app/services/inventory-log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {
  showDeleteModal: boolean = false;
  autoSuggestionResult: any;
  showInvoiced: boolean = false;

  constructor(
    private myService: InventoryEditService,
    private inventoryService: InventoryLogService,
    public modal: DataSharingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getInventoryLog();
  }

  setData(data: any) {
    console.log(data);
  }

  // calling Inventory log table service
  initialValue: any = 0;
  finalValue: any = 5;

  inventoryTableData: any;
  inventoryLength: any;

  displayData: any;
  renderData: any;

  getInventoryLog() {
    this.inventoryService.getInvtLogData().subscribe((result) => {
      this.inventoryTableData = result;
      this.displayData = this.inventoryTableData;
      // this.renderData = this.inventoryTableData;
      this.inventoryLength = this.inventoryTableData.length;
      if (this.inventoryLength > 5) {
        this.renderData = this.displayData.slice(
          this.initialValue,
          this.finalValue
        );
      } else {
        this.renderData = this.displayData.slice(this.initialValue);
      }
      console.log('length of inventory', this.inventoryLength);
    });
  }

  // pagination logic
  receiveTable(data: any) {
    this.renderData = data;
  }

  // check box handle
  check: boolean = false;
  handleCheckBox(event: any) {
    if (event.target.checked == true) {
      this.check = true;
    } else {
      this.check = false;
    }
  }

  deleteId: any;
  openDeleteModalId(id: any) {
    console.log(id);
    this.deleteId = id;
    this.modal.showDeleteModal = true;
  }

  removeData(id: any) {
    this.inventoryService.deleteInvtData(id).subscribe((result) => {
      console.log(result);
      this.getInventoryLog();
    });
  }

  closeModal(event: boolean) {
    this.showDeleteModal = event;
  }

  
  // auto suggestion search method
  searchInvtLog(query: any) {
    if (query) {
      const result = query.target as HTMLInputElement;
      // console.log(result.value);
      this.inventoryService.autoSearch(result.value).subscribe((resp: any) => {
        console.log(resp);
        if (resp.length > 4) {
          resp.length = 4;
        }
        this.autoSuggestionResult = resp;
        this.inventoryTableData = resp;
      });
    }
  }
  hideAutoSuggestion() {
    this.autoSuggestionResult = undefined;
  }

  toggleDropdown(index: any) {
    index.showInvoiced = !index.showInvoiced;
  }
  showOpen(data: any) {
    console.log(data);
    data.invoiced = 'Open';
    this.showInvoiced = false;
  }
  showReOpen(data: any) {
    data.invoiced = 'Re-open';
  }
  hideInvoiced() {
    this.showInvoiced = false;
  }
}
