import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { bmiItemModel } from '../Models/bmiItem.model';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  height :number =0;
  weight :number =0 ;
  bmiIndex :number =0 ;
  @Output()
  resultCalculated = new EventEmitter<bmiItemModel>();

  setHeight(height:string){
      this.height= parseInt(height);
  } 
  setWeight(weight:string){
      this.weight = parseInt(weight);
  }
  calculateBMI(){
      this.bmiIndex = (this.weight/(this.height*this.height));
      this.resultCalculated.emit(new bmiItemModel(this.height,this.weight,this.bmiIndex));
  }
  Reset()
  {
      this.height=0;
      this.weight=0;
      this.bmiIndex=0;
  }
}
