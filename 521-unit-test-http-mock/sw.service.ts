import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const API_URL = '/api';

@Injectable()
export class SwService {

  constructor(private http: Http) { }

  getList(): Observable<any[]> {
    return this.http.get(API_URL + '/employees')
      .map(res => res.json());
  }
}
