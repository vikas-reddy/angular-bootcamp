import { Component } from '@angular/core';

import { CarStateService } from './car-state.service';

@Component({
  selector: 'abc-page',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
  // ,providers: [CarStateService]
})
export class AppComponent {
  cars: any[] = [];

  addOne() {
    this.cars.push({});
  }
}
