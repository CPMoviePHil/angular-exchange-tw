import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowExchangeTwComponent } from './show-exchange-tw/show-exchange-tw.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowExchangeTwComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
