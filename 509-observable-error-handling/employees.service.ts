import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/switchMap';

const API_URL = '/api';

@Injectable()
export class EmployeesService {
  constructor(private http: Http) { }

  getEmployees(url = '/employees') {
    return this.http.get(API_URL + url)
      .map((res: Response) => res.json())
      .catch(err => {
        console.error('handling error within getEmployees()', err);
        const fakeData = [{ first_name: 'no employees could be loaded' }];
        return Observable.of(fakeData);
      });
  }

  poll1() {
    return Observable.interval(2000)
      .map(n => n % 2 ? '/employeesZZZ' : '/employees')
      .switchMap((dataUrl: string) => this.http.get(API_URL + dataUrl))
      .map((res: Response) => res.json())
      .catch((err) => {
        console.error('handling error within poll1()', err);
        const fakeData = [{ first_name: 'no employees could be loaded' }];
        return Observable.of(fakeData);
      })
      .do((data: any) => console.log('Data arrived', data));
  }

  poll2() {
    return Observable.interval(2000)
      .map((n: number) => n % 2 ? '/employeesZZZ' : '/employees')
      .switchMap(dataUrl => this.getEmployees(dataUrl))
      .do((data: any) => console.log('Data arrived', data));
  }
}
