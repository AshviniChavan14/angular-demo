import { NgModule } from "@angular/core";
import { AppBanner } from "./components/appBanner/appBanner.component";
import { AppFooter } from "./components/appFooter/appFooter.component";
import {BMIComponent} from "./components/timer/bmi.component";

@NgModule({
    declarations:[
        AppBanner,
        AppFooter,
        BMIComponent
    ],
    exports:[
        AppBanner,
        AppFooter,
        BMIComponent
    ]
})

export class WidgetModule{

}