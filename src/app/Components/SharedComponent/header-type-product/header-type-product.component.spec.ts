import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTypeProductComponent } from './header-type-product.component';

describe('HeaderTypeProductComponent', () => {
  let component: HeaderTypeProductComponent;
  let fixture: ComponentFixture<HeaderTypeProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderTypeProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderTypeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
