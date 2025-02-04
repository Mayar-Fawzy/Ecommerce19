import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCategoryComponent } from './card-category.component';

describe('CardCategoryComponent', () => {
  let component: CardCategoryComponent;
  let fixture: ComponentFixture<CardCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
