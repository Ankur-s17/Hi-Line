import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {

  // delete modal
  showDeleteModal: boolean = false;

  // user Add and Edit modal
  showAddModal: boolean = false;
  showEditModal: boolean = false;

  // Parts Add and Edit modal
  showPriceModal: boolean = false;
  showPartEditModal: boolean = false;

  // Area Add and Edit modal
  showAreaModal: boolean = false;
  showAreaEditModal: boolean = false;

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
