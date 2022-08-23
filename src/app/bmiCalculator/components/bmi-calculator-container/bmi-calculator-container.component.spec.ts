import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiCalculatorContainerComponent } from './bmi-calculator-container.component';

describe('BmiCalculatorContainerComponent', () => {
  let component: BmiCalculatorContainerComponent;
  let fixture: ComponentFixture<BmiCalculatorContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiCalculatorContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmiCalculatorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
