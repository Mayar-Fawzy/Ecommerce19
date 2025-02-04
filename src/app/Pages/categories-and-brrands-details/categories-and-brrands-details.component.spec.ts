import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesAndBrrandsDetailsComponent } from './categories-and-brrands-details.component';

describe('CategoriesAndBrrandsDetailsComponent', () => {
  let component: CategoriesAndBrrandsDetailsComponent;
  let fixture: ComponentFixture<CategoriesAndBrrandsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesAndBrrandsDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesAndBrrandsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
