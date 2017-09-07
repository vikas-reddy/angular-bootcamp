import { Component } from '@angular/core';

import { AppService } from './dashboard/state/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(appService: AppService) {

  }
}
