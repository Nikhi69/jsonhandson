import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditViewtempComponent } from './edit-viewtemp.component';

describe('EditViewtempComponent', () => {
  let component: EditViewtempComponent;
  let fixture: ComponentFixture<EditViewtempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditViewtempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditViewtempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
