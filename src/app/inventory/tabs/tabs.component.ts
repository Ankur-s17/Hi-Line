import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  selectedTab: any;
  tabsList = ['inventory log', 'add inventory', 'return inventory'];

  showTabComponent(tab: any) {
    // console.log(tab);
    this.selectedTab = tab;
  }
}
