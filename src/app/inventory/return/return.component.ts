import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.scss'],
})
export class ReturnComponent {
  inventoryReturnForm = new FormGroup({
    job_number: new FormControl('', [Validators.required]),
    job_desc: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required]),
    part_number: new FormControl('', [Validators.required]),
    part_desc: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
  });

  // handling return inventory form
  handleReturnInventoryForm() {
    console.log(this.inventoryReturnForm.value);
  }

  // inventory return getters function
  get job_number() {
    return this.inventoryReturnForm.get('job_number');
  }
  get job_desc() {
    return this.inventoryReturnForm.get('job_desc');
  }
  get area() {
    return this.inventoryReturnForm.get('area');
  }
  get part_number() {
    return this.inventoryReturnForm.get('part_number');
  }
  get part_desc() {
    return this.inventoryReturnForm.get('part_desc');
  }
  get quantity() {
    return this.inventoryReturnForm.get('quantity');
  }
  
}
