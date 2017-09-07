import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CounterDisplayComponent } from './counter-display.component';
import { berryCounterReducer, appleCounterReducer } from './state';

@NgModule({
  declarations: [
    AppComponent,
    CounterDisplayComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ berryCounter: berryCounterReducer, appleCounter: appleCounterReducer })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
