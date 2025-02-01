import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAddressComponent } from './show-address.component';

describe('ShowAddressComponent', () => {
  let component: ShowAddressComponent;
  let fixture: ComponentFixture<ShowAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowAddressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
