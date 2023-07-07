import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InventoryLogService } from 'src/app/services/inventory-log.service';

@Component({
  selector: 'app-edit-description',
  templateUrl: './edit-description.component.html',
  styleUrls: ['./edit-description.component.scss'],
})
export class EditDescriptionComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private updateJob: InventoryLogService
  ) {}

  jobDescription: any;
  // updateDesc: any;

  ngOnInit() {
    // Note: Below 'queryParams' can be replaced with 'params' depending on your requirements
    this.activatedRoute.queryParams.subscribe((params) => {
      const userId = params['prop'];
      console.log('user Id ', userId);
      this.updateJob.getUpdateInvtId(userId).subscribe((result) => {
        console.log(result);
        this.jobDescription = result;
      });
    });
  }

  // Inventory edit description
  editDesc = new FormGroup({
    jobDesc: new FormControl(''),
  });
  // Inventory edit getters function
  get jobDesc() {
    return this.editDesc.get('jobDesc');
  }

  UpdateJobDesc(data: any) {
    // console.log(description);
    if (this.jobDescription) {
      data.id == this.jobDescription.id;
    }
    console.log('edit desc', this.jobDescription);

    this.updateJob.updateDesc(this.jobDescription).subscribe((result) => {
      console.log('updated result', result);
    });
  }
}
