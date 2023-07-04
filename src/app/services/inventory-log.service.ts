import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InventoryLogService {
  constructor(private http: HttpClient) {}

  // Inventory Log get API
  getInvtLogData() {
    return this.http.get('http://localhost:3000/inventory_log');
  }

  // Inventory add using POST API
  addInvtData(data: any) {
    // debugger
    return this.http.post('http://localhost:3000/inventory_log', data);
  }
}
