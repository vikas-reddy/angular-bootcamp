import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2/angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { WeatherScreen } from './weatherScreen';
import { WeatherPanel } from './weatherPanel';
import { SecondsToDatePipe } from './secondsToDatePipe';

export const firebaseConfig = {
  apiKey: '<your-key>',
  authDomain: '<your-project-authdomain>',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '<your-messaging-sender-id>',

  databaseURL: 'https://publicdata-weather.firebaseio.com/'
};

console.log('AngularFireModule', AngularFireModule);

@NgModule({
  declarations: [WeatherScreen, WeatherPanel, SecondsToDatePipe],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [WeatherScreen]
})
export class AppModule { }
