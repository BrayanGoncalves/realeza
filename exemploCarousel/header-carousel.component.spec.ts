import { NO_ERRORS_SCHEMA } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderService } from '@services/header.service';
import { HeaderStub } from '@services/header.service.spec';

import { HeaderCarouselComponent } from './header-carousel.component';

describe('HeaderCarouselComponent', () => {
  let component: HeaderCarouselComponent;
  let fixture: ComponentFixture<HeaderCarouselComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCarouselComponent ],
      providers: [
        { provide: HeaderService, useClass: HeaderStub },
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
