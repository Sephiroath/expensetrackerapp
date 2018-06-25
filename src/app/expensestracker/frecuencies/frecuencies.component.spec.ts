import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrecuenciesComponent } from './frecuencies.component';

describe('FrecuenciesComponent', () => {
  let component: FrecuenciesComponent;
  let fixture: ComponentFixture<FrecuenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrecuenciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrecuenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
