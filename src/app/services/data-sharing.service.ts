import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
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
