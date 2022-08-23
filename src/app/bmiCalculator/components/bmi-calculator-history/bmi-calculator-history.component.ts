import { Component, OnInit ,Input, OnChanges, SimpleChanges} from '@angular/core';

import { bmiItemModel } from '../Models/bmiItem.model';

@Component({
  selector: 'app-bmi-calculator-history',
  templateUrl: './bmi-calculator-history.component.html',
  styleUrls: ['./bmi-calculator-history.component.css']
})
export class BmiCalculatorHistoryComponent implements OnInit,OnChanges {

  
  constructor() { }
  @Input()
  bmiResultData: bmiItemModel =null;
  bmiResultHistory : Array<bmiItemModel> =[];

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges):void{  
    // this.bmiResultHistory.push(changes['currentValue'] as unknown as bmiItemModel);
    if(!changes['bmiResultData'].firstChange){
    this.bmiResultHistory.push(this.bmiResultData);
    console.log('Current Value', changes['bmiResultData']['currentValue'] );
    console.log('ResultHistory Array', this.bmiResultHistory);
    }
  } 
}
