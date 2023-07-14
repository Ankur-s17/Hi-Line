import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() inventoryLength: number;
  @Input() initialValue: number;
  @Input() finalValue: number;
  @Input() displayData: Array<any>;

  @Output() abc = new EventEmitter<any>();

  renderData: Array<any>;

  // initialValue: any = 0;
  // finalValue: any = 5;

  disabledNextBtn: boolean = false;
  disablePrevBtn: boolean;

  ngOnInit(): void {
    this.disablePrevBtn = true;
  }

  nextPageButton() {
    this.initialValue = this.finalValue;
    this.finalValue = this.finalValue + 5;
    if (this.finalValue <= this.inventoryLength) {
      this.renderData = this.displayData.slice(
        this.initialValue,
        this.finalValue
      );
      this.disablePrevBtn = false;
    } else {
      this.finalValue = this.inventoryLength;
      this.renderData = this.displayData.slice(
        this.initialValue,
        this.inventoryLength
      );
      this.disabledNextBtn = true;
    }
    // console.log(this.renderData);
    this.abc.emit(this.renderData)
  }

  previousPageButton() {
    this.initialValue = this.initialValue - 5;
    this.finalValue = this.initialValue + 5;
    if (this.initialValue == 0) {
      this.disablePrevBtn = true;
      this.renderData = this.displayData.slice(
        this.initialValue,
        this.finalValue
      );
    } else {
      this.disabledNextBtn = false;
      this.renderData = this.displayData.slice(
        this.initialValue,
        this.finalValue
      );
    }
    this.abc.emit(this.renderData);
  }
}
