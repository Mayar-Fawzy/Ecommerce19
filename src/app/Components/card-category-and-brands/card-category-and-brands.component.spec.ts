import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCategoryAndBrandsComponent } from './card-category-and-brands.component';

describe('CardCategoryAndBrandsComponent', () => {
  let component: CardCategoryAndBrandsComponent;
  let fixture: ComponentFixture<CardCategoryAndBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCategoryAndBrandsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCategoryAndBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
