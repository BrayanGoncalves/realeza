import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeQuickMessageComponent } from './stripe-quick-message.component';

describe('StripeQuickMessageComponent', () => {
  let component: StripeQuickMessageComponent;
  let fixture: ComponentFixture<StripeQuickMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StripeQuickMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StripeQuickMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
