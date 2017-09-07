import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IEmployee } from '../employee-loader.service';

@Component({
  selector: 'employee-detail',
  moduleId: __moduleName,
  templateUrl: './employee-detail.component.html'
})
export class EmployeeDetailComponent {
  employee$: Observable<IEmployee>;

  constructor(route: ActivatedRoute) {
    // String here has to match the string in the resolve config of your route
    this.employee$ = route.data.map(data => data['employee']);
  }
}
