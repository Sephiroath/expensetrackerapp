import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensestrackerComponent } from './expensestracker.component';

describe('ExpensestrackerComponent', () => {
  let component: ExpensestrackerComponent;
  let fixture: ComponentFixture<ExpensestrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensestrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensestrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
