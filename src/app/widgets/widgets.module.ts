import { NgModule } from "@angular/core";
import { AppBanner } from "./components/appBanner/appBanner.component";
import { AppFooter } from "./components/appFooter/appFooter.component";
import {BMIComponent} from "./components/timer/bmi.component";

import { FormsModule } from '@angular/forms';
import { BmiCalculatorHistoryComponent } from '../bmiCalculator/components/bmi-calculator-history/bmi-calculator-history.component';
import { BmiCalculatorContainerComponent } from '../bmiCalculator/components/bmi-calculator-container/bmi-calculator-container.component';
import { BmiCalculatorComponent } from '../bmiCalculator/components/bmi-calculator/bmi-calculator.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        AppBanner,
        AppFooter,
        BMIComponent,
        BmiCalculatorHistoryComponent,
        BmiCalculatorContainerComponent,
        BmiCalculatorComponent
    ],
    exports:[
        AppBanner,
        AppFooter,
        BMIComponent,
        BmiCalculatorHistoryComponent,
        BmiCalculatorContainerComponent,
        BmiCalculatorComponent
    ],
    imports: [FormsModule,CommonModule]
})

export class WidgetModule{

}