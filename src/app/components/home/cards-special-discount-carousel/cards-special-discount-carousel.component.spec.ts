import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsSpecialDiscountCarouselComponent } from './cards-special-discount-carousel.component';

describe('CardsSpecialDiscountCarouselComponent', () => {
  let component: CardsSpecialDiscountCarouselComponent;
  let fixture: ComponentFixture<CardsSpecialDiscountCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsSpecialDiscountCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsSpecialDiscountCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
