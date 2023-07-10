import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserManagementService {
  constructor(private http: HttpClient) {}

  userManagementData() {
    return this.http.get('http://localhost:3000/user_management');
  }
}
