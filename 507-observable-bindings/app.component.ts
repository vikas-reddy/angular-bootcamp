import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Http, Response } from '@angular/http';

import { jsonRequestHeaders } from './httpUtils';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/share';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  time$: Observable<number>;
  name$: Observable<string>;
  showData: boolean = true;
  showExtraTime: boolean = true;

  constructor(http: Http) {
    this.name$ = http.get('http://swapi.co/api/people/11/', jsonRequestHeaders)
      .map((res: Response) => res.json())
      .do(thing => console.log(thing))
      .map((data: { name: string }) => data.name);

    // Example of making an Observable:
    this.time$ = new Observable<number>((observer: Observer<number>) => {
      console.log('Subscribing to time');
      let handle = setInterval(() => {
        console.log('emitting time');
        observer.next(new Date().getTime() % 10000);
      }, 100);
      // stop interval on unsubscribe
      return function () {
        console.log('Unsubscribing to time');
        clearInterval(handle);
      };
    }).share();  // Try it without share().
  }
}
