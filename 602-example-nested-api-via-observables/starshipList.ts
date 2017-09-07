import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { StarshipApi, IFilm } from './starshipApi';

@Component({
  selector: 'abc-page',
  providers: [StarshipApi],
  templateUrl: 'starshipList.html'
})
export class StarshipListComponent {
  starships$: Observable<IFilm[]>;

  constructor(api: StarshipApi) {
    this.starships$ = api.starships();
  }
}
