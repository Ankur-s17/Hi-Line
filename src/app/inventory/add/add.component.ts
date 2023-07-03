import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  inventoryAddForm = new FormGroup({
    job_number: new FormControl('', [Validators.required]),
    job_desc: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required]),
    part_number: new FormControl('', [Validators.required]),
    part_desc: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
  });

  // handling add inventory form
  handleAddInventoryForm() {
    console.log(this.inventoryAddForm.value);
  }

  // add Inventory form getters function
  get job_number() {
    return this.inventoryAddForm.get('job_number');
  }
  get job_desc() {
    return this.inventoryAddForm.get('job_desc');
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
    return this.inventoryAddForm.get('quantity');
  }
}
