import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByCategorisComponent } from './product-by-categoris.component';

describe('ProductByCategorisComponent', () => {
  let component: ProductByCategorisComponent;
  let fixture: ComponentFixture<ProductByCategorisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductByCategorisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductByCategorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
