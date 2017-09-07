import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
  selector: 'employee-detail',
  moduleId: __moduleName,
  templateUrl: './employee-detail.component.html'
})
export class EmployeeDetailComponent {
  id: Observable<number>;

  constructor(route: ActivatedRoute) {
    console.log('Creating new instance of NameComponent');
    this.id = route.params
      .do(params => console.log('Got new value for params', params))
      .map(params => {
        return params['employeeId'];
      });
  }
}
