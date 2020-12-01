import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsSpecialDiscountComponent } from './cards-special-discount.component';

describe('CardsSpecialDiscountComponent', () => {
  let component: CardsSpecialDiscountComponent;
  let fixture: ComponentFixture<CardsSpecialDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsSpecialDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsSpecialDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
