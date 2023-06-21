import { TestBed } from '@angular/core/testing';

import { InventoryEditService } from './inventory-edit.service';

describe('InventoryEditService', () => {
  let service: InventoryEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
