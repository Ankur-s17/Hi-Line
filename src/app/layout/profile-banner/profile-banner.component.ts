import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-banner',
  templateUrl: './profile-banner.component.html',
  styleUrls: ['./profile-banner.component.scss'],
})
export class ProfileBannerComponent {
  constructor(private route: Router) {}
  userLogout() {
    localStorage.removeItem('token');
    this.route.navigate(['/']);
  }
}
