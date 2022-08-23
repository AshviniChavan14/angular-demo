import { Component } from "@angular/core";

@Component({
    selector:'app-timer',
    templateUrl:'./bmi.component.html',
    styleUrls: ['./bmi.component.css']
})
export class BMIComponent{
    height :number =0;
    weight :number =0 ;
    bmiIndex :number =0 ;
    setHeight(height:string){
        this.height= parseInt(height);
    } 
    setWeight(weight:string){
        this.weight = parseInt(weight);
    }
    calculateBMI(){
        this.bmiIndex = (this.weight/(this.height*this.height));
    }
    Reset()
    {
        this.height=0;
        this.weight=0;
        this.bmiIndex=0;
    }
}