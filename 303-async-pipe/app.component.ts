import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { EmployeeLoaderService } from './employee-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  employeeData$: Observable<object[]>;

  constructor(svc: EmployeeLoaderService) {
    this.employeeData$ = svc.loadEmployees();
  }
}
