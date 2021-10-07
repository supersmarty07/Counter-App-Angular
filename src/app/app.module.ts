import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { ButtonRowComponent } from './button-row/button-row.component';
import { PassCounterService } from './pass-counter.service';
@NgModule({
  declarations: [AppComponent, DisplayComponent, ButtonRowComponent],
  imports: [BrowserModule],
  providers: [PassCounterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
