import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedRoutingModule } from './shared-routing.module';
import { SearchComponent } from './search/search.component';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [SearchComponent, ModalDeleteComponent, PaginationComponent],
  imports: [CommonModule],
  exports: [SearchComponent, ModalDeleteComponent, PaginationComponent],
})
export class SharedModule {}
