import { Component, Input, OnInit } from '@angular/core';
import { bmiItemModel } from '../Models/bmiItem.model';

@Component({
  selector: 'app-bmi-calculator-container',
  templateUrl: './bmi-calculator-container.component.html',
  styleUrls: ['./bmi-calculator-container.component.css']
})
export class BmiCalculatorContainerComponent implements OnInit {
  
  constructor() { }
  bmiData = new bmiItemModel(0,0,0);
  ngOnInit(): void {
  }
  OnBMIResultCalculated(bmiModel : bmiItemModel){
    this.bmiData= bmiModel;
  }
}
