import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedRoutingModule } from './shared-routing.module';
import { SearchComponent } from './search/search.component';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';

@NgModule({
  declarations: [SearchComponent, ModalDeleteComponent],
  imports: [CommonModule],
  exports: [SearchComponent, ModalDeleteComponent],
})
export class SharedModule {}
