import { Component } from '@angular/core';

import { EmployeeLoaderService } from './employee-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  employeeData: object[];

  constructor(svc: EmployeeLoaderService) {
    svc.loadEmployees()
      .subscribe((data: object[]) => this.employeeData = data);
  }
}
