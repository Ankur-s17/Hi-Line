import { Component } from '@angular/core';
import { InventoryEditService } from 'src/app/services/inventory-edit.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent {
  constructor(private myService: InventoryEditService) {}

  updateVariable(): void {
    this.myService.setMyVariable(true);
  }
}
