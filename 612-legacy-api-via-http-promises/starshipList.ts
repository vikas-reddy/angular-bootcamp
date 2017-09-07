import { Component } from '@angular/core';

import { StarshipApi } from './StarshipApi';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'abc-page',
  providers: [StarshipApi],
  templateUrl: './starshipList.html'
})
export class StarshipListComponent {
  starships: any[];

  constructor(api: StarshipApi) {
    api.loadStarships()
      .then((data: any) => this.starships = data);
  }
}
