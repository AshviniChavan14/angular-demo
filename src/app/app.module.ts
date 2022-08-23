import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OutputComponent } from './Ashvini/output.component';
import { WidgetModule } from './widgets/widgets.module';
import { AccountsModule } from './accounts/accounts.module';


@NgModule({
  declarations: [
    AppComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    WidgetModule,
    AccountsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
