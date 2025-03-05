import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonallComponent } from './personall.component';

describe('PersonallComponent', () => {
  let component: PersonallComponent;
  let fixture: ComponentFixture<PersonallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
