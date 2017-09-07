import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'person-list',
  template: `
  <h1>Person List</h1>
  <ul>
    <li *ngFor="let p of people | async">
    {{p["$key"]}} / {{p.name}} / {{p.score}}
    </li>
  </ul>
  `
})
export class PersonList {
  people: Observable<any[]>;

  constructor(afDb: AngularFireDatabase) {
    this.people = afDb.list('stuff/cat1',
      {
        query: {
          orderByChild: 'name',
          limitToFirst: 10
        }
      }).debounceTime(100);
  }
}
