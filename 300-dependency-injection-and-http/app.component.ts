import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

const API_URL = '/api';

// Or connect directly to the API server (not on Cloud9):
// const API_URL = 'http://localhost:8085';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  employeeData: object[];

  constructor(http: Http) {
    http.get(API_URL + '/employees')
      .subscribe((res: Response) => this.employeeData = res.json());
  }
}
