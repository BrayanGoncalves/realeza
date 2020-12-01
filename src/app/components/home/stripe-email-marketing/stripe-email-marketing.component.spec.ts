import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeEmailMarketingComponent } from './stripe-email-marketing.component';

describe('StripeEmailMarketingComponent', () => {
  let component: StripeEmailMarketingComponent;
  let fixture: ComponentFixture<StripeEmailMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StripeEmailMarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StripeEmailMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
