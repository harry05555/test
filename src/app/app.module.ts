import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TransportLKW } from './lastenTransporter/transportLKW.class';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TransportLKW],
  bootstrap: [AppComponent]
})
export class AppModule { }