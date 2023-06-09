import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  sideNavMenu: any;
  currentUrl: any = 1;

  ngOnInit(): void {
    this.getSideNav();
    // this.currentUrl = localStorage.getItem('clicked_icon');
  }

  constructor(private sideIcons: SidenavService) {}

  getSideNav() {
    this.sideIcons.getSideNavData().subscribe((result) => {
      console.log(result);
      this.sideNavMenu = result;
      // console.log('side nav', this.sideNavMenu);
    });
  }

  activeIcon(index: number) {
    this.currentUrl = index;
    // localStorage.setItem('clicked_icon', this.currentUrl);
  }
}
