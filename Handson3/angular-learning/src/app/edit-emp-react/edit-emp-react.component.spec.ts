import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmpReactComponent } from './edit-emp-react.component';

describe('EditEmpReactComponent', () => {
  let component: EditEmpReactComponent;
  let fixture: ComponentFixture<EditEmpReactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmpReactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmpReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
