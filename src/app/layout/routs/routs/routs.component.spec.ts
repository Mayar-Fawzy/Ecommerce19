import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutsComponent } from './routs.component';

describe('RoutsComponent', () => {
  let component: RoutsComponent;
  let fixture: ComponentFixture<RoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
