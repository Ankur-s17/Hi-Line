import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  selectedTab: any;
  tabsList = ['inventory log', 'add inventory', 'return inventory'];
  

  ngOnInit(): void {
    this.selectedTab = this.tabsList[0];  
  }

  showTabComponent(tab: any) {
    // console.log(tab);
    this.selectedTab = tab;
  }
}
