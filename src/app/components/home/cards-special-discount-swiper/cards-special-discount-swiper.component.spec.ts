import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsSpecialDiscountSwiperComponent } from './cards-special-discount-swiper.component';

describe('CardsSpecialDiscountSwiperComponent', () => {
  let component: CardsSpecialDiscountSwiperComponent;
  let fixture: ComponentFixture<CardsSpecialDiscountSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsSpecialDiscountSwiperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsSpecialDiscountSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
