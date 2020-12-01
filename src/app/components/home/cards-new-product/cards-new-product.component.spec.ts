import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsNewProductComponent } from './cards-new-product.component';

describe('CardsNewProductComponent', () => {
  let component: CardsNewProductComponent;
  let fixture: ComponentFixture<CardsNewProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsNewProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsNewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
