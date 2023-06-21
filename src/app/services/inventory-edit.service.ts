import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InventoryEditService {
  constructor() {}

  private myVariableSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public myVariable$: Observable<boolean> = this.myVariableSubject.asObservable();

  setMyVariable(value: boolean): void {
    this.myVariableSubject.next(value);
  }
  
}
