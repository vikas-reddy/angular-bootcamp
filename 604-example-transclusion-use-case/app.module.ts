import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NewsComponent } from './news';
import { CollectionPanelComponent, CollectionPanelComponentTags } from './collection-panel';
import { AnnouncementComponent, AnnouncementComponentTags } from './announcement';

@NgModule({
  declarations: [
    NewsComponent,
    CollectionPanelComponent,
    CollectionPanelComponentTags,
    AnnouncementComponent,
    AnnouncementComponentTags
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [NewsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
