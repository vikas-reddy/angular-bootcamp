import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { EmployeeLoaderService } from './employee-loader.service';

import { AppComponent }  from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [EmployeeLoaderService], // Make loader service available to app
  bootstrap: [AppComponent]
})
export class AppModule { }
