import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss'],
})
export class ModalDeleteComponent {
  @Input() id: any;
  @Input() deleteId: any;
  @Output() closeModal = new EventEmitter<any>();
  @Output() removeData = new EventEmitter<any>();

  constructor(public modal: DataSharingService) {}

  deleteInvtData(id: any) {
    this.removeData.emit(id);
    // this.closeModal.emit(false);
    this.modal.showDeleteModal = false;
  }

  clsModal(){
    // this.closeModal.emit(false);
    this.modal.showDeleteModal = false;
  }
}
