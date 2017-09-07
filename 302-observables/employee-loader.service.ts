import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const API_URL = '/api';

// Or connect directly to the API server (not on Cloud9):
// const API_URL = 'http://localhost:8085';

@Injectable()
export class EmployeeLoaderService {

  constructor(private http: Http) { }

  loadEmployees(): Observable<object[]> {
    return this.http.get(API_URL + '/employees')
      .map((res: Response) => res.json());
  }
}
