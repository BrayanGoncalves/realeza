import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketBrandsComponent } from './market-brands.component';

describe('MarketBrandsComponent', () => {
  let component: MarketBrandsComponent;
  let fixture: ComponentFixture<MarketBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketBrandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
