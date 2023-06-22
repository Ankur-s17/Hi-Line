import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {

  // delete modal
  showDeleteModal: boolean = false;

  // user add modal
  showAddModal: boolean = false;

  // Price add modal
  showPriceModal: boolean = false;

  constructor() {}
  private dataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  // setData method updates the value of dataSubject
  setData(data: any): void {
    this.dataSubject.next(data);
  }

  // getData method returns the dataSubject as a BehaviorSubject.
  getData(): BehaviorSubject<any> {
    return this.dataSubject;
  }
}
