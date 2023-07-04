import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InventoryLogService } from 'src/app/services/inventory-log.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  constructor(private inventoryService: InventoryLogService) {}

  inventoryAddForm = new FormGroup({
    jobId: new FormControl('', [Validators.required]),
    jobDesc: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required]),
    part_number: new FormControl('', [Validators.required]),
    part_desc: new FormControl('', [Validators.required]),
    totalQuantity: new FormControl('', [Validators.required]),
  });

  // handling add inventory form
  handleAddInventoryForm(data: any) {
    // console.log(data);
    this.inventoryService.addInvtData(data).subscribe((resp) => {
      console.log(resp);
    });
  }

  // add Inventory form getters function
  get job_number() {
    return this.inventoryAddForm.get('jobId');
  }
  get job_desc() {
    return this.inventoryAddForm.get('jobDesc');
  }
  get area() {
    return this.inventoryAddForm.get('area');
  }
  get part_number() {
    return this.inventoryAddForm.get('part_number');
  }
  get part_desc() {
    return this.inventoryAddForm.get('part_desc');
  }
  get quantity() {
    return this.inventoryAddForm.get('totalQuantity');
  }
}
