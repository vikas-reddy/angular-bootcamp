import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RedditSearchComponent } from './reddit-search/reddit-search.component';
import { RedditImageSearchService } from './reddit-search/reddit-image-search.service';

@NgModule({
  declarations: [
    AppComponent,
    RedditSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [RedditImageSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
