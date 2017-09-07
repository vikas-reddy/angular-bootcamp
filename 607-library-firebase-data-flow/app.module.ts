import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2/angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { ActivityPanel } from './activityPanel';
import { PersonList } from './personList';
import { OnePerson } from './onePerson';
import { ExampleComponent } from './example';

export const firebaseConfig = {
  apiKey: '<your-key>',
  authDomain: '<your-project-authdomain>',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '<your-messaging-sender-id>',

  databaseURL: 'https://a2-fb-demo.firebaseio.com/'
};

@NgModule({
  declarations: [ExampleComponent, ActivityPanel, PersonList, OnePerson],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [ExampleComponent]
})
export class AppModule { }
