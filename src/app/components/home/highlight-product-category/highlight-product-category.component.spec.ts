import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightProductCategoryComponent } from './highlight-product-category.component';

describe('HighlightProductCategoryComponent', () => {
  let component: HighlightProductCategoryComponent;
  let fixture: ComponentFixture<HighlightProductCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightProductCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
