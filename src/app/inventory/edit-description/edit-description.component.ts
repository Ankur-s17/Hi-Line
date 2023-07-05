import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-description',
  templateUrl: './edit-description.component.html',
  styleUrls: ['./edit-description.component.scss'],
})
export class EditDescriptionComponent {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // Note: Below 'queryParams' can be replaced with 'params' depending on your requirements
    this.activatedRoute.queryParams.subscribe((params) => {
      const userId = params['prop'];
      console.log(userId);
    });
  }
}
