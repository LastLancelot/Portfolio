import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarketMainPageComponent } from './market-main-page/market-main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketMainPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
