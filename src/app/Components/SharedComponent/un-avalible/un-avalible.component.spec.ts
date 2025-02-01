import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnAvalibleComponent } from './un-avalible.component';

describe('UnAvalibleComponent', () => {
  let component: UnAvalibleComponent;
  let fixture: ComponentFixture<UnAvalibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnAvalibleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnAvalibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
