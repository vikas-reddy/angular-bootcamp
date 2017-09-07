import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/pluck';

import { EmployeeLoader, Employee } from '../employee-loader.service';

@Component({
  selector: 'employee-detail',
  moduleId: __moduleName,
  templateUrl: './employee-detail.component.html'
})
export class EmployeeDetailComponent {
  employee: Observable<Employee>;

  constructor(route: ActivatedRoute, loader: EmployeeLoader) {
    this.employee = route.params
      .pluck<{}, number>('employeeId') // like .map(params => params['employeeId'])
      .switchMap(id => loader.getDetails(id))
      .share();
  }
}
