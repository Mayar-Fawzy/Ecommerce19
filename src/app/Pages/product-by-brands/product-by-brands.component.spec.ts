import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByBrandsComponent } from './product-by-brands.component';

describe('ProductByBrandsComponent', () => {
  let component: ProductByBrandsComponent;
  let fixture: ComponentFixture<ProductByBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductByBrandsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductByBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
