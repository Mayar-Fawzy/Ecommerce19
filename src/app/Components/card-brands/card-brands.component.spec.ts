import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBrandsComponent } from './card-brands.component';

describe('CardBrandsComponent', () => {
  let component: CardBrandsComponent;
  let fixture: ComponentFixture<CardBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBrandsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
