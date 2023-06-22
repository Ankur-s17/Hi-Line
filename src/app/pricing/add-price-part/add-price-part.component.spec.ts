import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPricePartComponent } from './add-price-part.component';

describe('AddPricePartComponent', () => {
  let component: AddPricePartComponent;
  let fixture: ComponentFixture<AddPricePartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPricePartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPricePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
