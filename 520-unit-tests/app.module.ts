import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
import { HelloService } from './hello.service';

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent
  ],
  imports: [BrowserModule],
  providers: [HelloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
