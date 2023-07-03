import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InventoryLogService {
  constructor(private http: HttpClient) {}

  // getting Inventory Log Table data throgh
  getInvtLogData() {
    return this.http.get('/assets/services/inventorylog.json');
  }
}
