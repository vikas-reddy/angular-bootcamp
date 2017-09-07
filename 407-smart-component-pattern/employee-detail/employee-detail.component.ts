import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { EmployeeLoader, IEmployee } from '../employee-loader.service';

@Component({
  selector: 'employee-detail',
  moduleId: __moduleName,
  templateUrl: './employee-detail.component.html'
})
export class EmployeeDetailComponent {
  theEmployee$: Observable<IEmployee>;

  constructor(route: ActivatedRoute, loader: EmployeeLoader) {
    this.theEmployee$ = route.params
      .map(params => params['employeeId'])
      .switchMap(id => loader.getDetails(id));
  }
}
