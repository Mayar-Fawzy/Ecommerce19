import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCategoryComponent } from './slider-category.component';

describe('SliderCategoryComponent', () => {
  let component: SliderCategoryComponent;
  let fixture: ComponentFixture<SliderCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
