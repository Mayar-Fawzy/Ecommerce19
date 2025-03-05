import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddreessComponent } from './edit-addreess.component';

describe('EditAddreessComponent', () => {
  let component: EditAddreessComponent;
  let fixture: ComponentFixture<EditAddreessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAddreessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAddreessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
