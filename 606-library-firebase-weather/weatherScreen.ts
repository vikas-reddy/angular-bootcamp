import { Component } from '@angular/core';

@Component({
  selector: 'abc-page',
  templateUrl: './weatherScreen.html'
})
export class WeatherScreen {
  cities: string[] = ['sanfrancisco', 'austin', 'boston'];
}
