import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  
  constructor(private http: HttpClient) {}

  getSideNavData() {
    return this.http.get('/assets/services/sideNav.json');
  }
}
